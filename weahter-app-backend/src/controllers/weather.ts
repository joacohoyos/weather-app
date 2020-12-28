import { RequestHandler } from "express";
import { Autocomplete } from "../interfaces/accuweather";
import { autocomplete } from "../services/accuweather";

// import {} from '../services/weatherstack'

export const getAutocomplete: RequestHandler = async (req, res, next) => {
    if(!req.query.query){
        res.status(400).send()
    }
    const query: string = req.query.query as string
    try {
        const response: Autocomplete[] = await autocomplete(query)
        res.status(200).send(response)
    } catch(error){
        res.status(400).send({
            error: error.message
        })
    }
}