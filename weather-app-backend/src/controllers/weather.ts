import { RequestHandler } from "express";
import { Forecast, Location, Weather} from "../interfaces/accuweather";
import { searchLocationsByAutocomplete, searchLocationByGeoposition, searchCurrentWeather, searchForecastWeather } from "../services/accuweather";

export const getLocationsByAutocomplete: RequestHandler = async (req, res, next) => {
    if(!req.query.query){
        res.status(400).send()
        next()
    }
    const query: string = req.query.query as string
    try {
        const response: Location[] = await searchLocationsByAutocomplete(query)
        res.status(200).send(response)
    } catch(error){
        res.status(400).send({
            error: error.message
        })
    }
}

export const getLocationByGeoposition: RequestHandler = async (req, res, next) => {
    if(!req.query.lat){
        res.status(400).send()
        next()
    }
    if(!req.query.long){
        res.status(400).send()
        next()
    }
    try {
        const lat: number = Number.parseFloat(req.query.lat as string) 
        const long: number = Number.parseFloat(req.query.long as string) 
        const response: Location = await searchLocationByGeoposition(lat, long)
        res.status(200).send(response)
    } catch(error){
        res.status(400).send({
            error: error.message
        })
    }
}

export const getCurrentWeather: RequestHandler = async (req, res, next) => {
    const locationKey: string = req.params.locationKey as string

    try{
        const response: Weather = await searchCurrentWeather(locationKey)
        res.status(200).send(response)
    } catch(error){
        res.status(400).send({
            error: error.message
        })
    } 
}
export const getForecastWeather: RequestHandler = async (req, res, next) => {
    const locationKey = req.params.locationKey as string
    if(!req.query.isMetric){
        res.status(400).send()
        next()
    }

    try{
        const isMetric: boolean = req.query.isMetric === 'true' 
        const response: Forecast[] = await searchForecastWeather(locationKey, isMetric)
        res.status(200).send(response)
    } catch(error){
        res.status(400).send({
            error: error.message
        })
    } 
}
