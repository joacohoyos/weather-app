import axios from '../utility/axios-weather'
import { Forecast, Location, Weather } from '../interfaces/accuweather'
import { ACCUWEATHER_API_KEY} from '../config'
import * as weatherText from '../utility/weatherText'

const API_KEY = ACCUWEATHER_API_KEY

const responseToLocation = (location: any) => {
    return {
        type: location.Type,
        key: location.Key,
        locationName: location.LocalizedName,
        country: {
            id: location.Country.ID,
            name: location.Country.LocalizedName
        },
        administrativeArea: {
            id: location.AdministrativeArea.ID,
            name: location.AdministrativeArea.LocalizedName
        }            
    }
}

export const searchLocationsByAutocomplete = async (query: string) => {
    const endpoint = `locations/v1//cities/autocomplete?apikey=${API_KEY}&q=${query}`
    try {
        const response = await axios.get(endpoint)
        const data: any[] = response.data
        const autocompleteResponse: Location[]  = data.map(d  => responseToLocation(d))
        return autocompleteResponse
    } catch(error) {
        console.log(error.message)
        throw error
    }   
}

export const searchLocationByGeoposition = async (lat: number, long: number) => {
    const geoposition = lat + ',' + long
    const queryParams = `apikey=${API_KEY}&q=${geoposition}`
    const endpoint = `locations/v1/cities/geoposition/search?${queryParams}`
    try {
        const response = await axios.get(endpoint)
        const data: any = response.data
        const locationResponse: Location = responseToLocation(data)
        return locationResponse
    } catch(error) {
        console.log(error)
        throw error
    }
}

export const searchCurrentWeather = async (locationKey: string) => {
    const endpoint = `currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`
    try {
        const response = await axios.get(endpoint)
        const data: any = response.data[0]
        const weatherResponse: Weather = {
            weatherIcon: getWeatherIcon(data.CloudCover, data.HasPrecipitation, data.WeatherText),
            temperature: {
                metric: data.Temperature.Metric.Valuem,
                imperial: data.Temperature.Imperial.Value
            },
            humidity: data.RelativeHumidity,
            wind: {
                metric: data.Wind.Speed.Metric.Value,
                imperial: data.Wind.Speed.Imperial.Value
            },
            visibility: {
                metric: data.Visibility.Metric.Value,
                imperial: data.Visibility.Imperial.Value
            },
            airPressure: {
                metric: data.Pressure.Metric.Value,
                imperial: data.Pressure.Imperial.Value
            }
        }
        return weatherResponse
    } catch(error) {
        console.log(error)
        throw error
    }
}

export const searchForecastWeather = async (locationKey: string, isMetric: boolean) => {
    const queryParams = `apikey=${API_KEY}&details=true&metric=${isMetric}`
    const endpoint = `forecasts/v1/daily/5day/${locationKey}?${queryParams}`

    try {
        const response = await axios.get(endpoint)
        const forecasts: any[] = response.data.DailyForecasts
        const forecastResponse: Forecast[] = forecasts.map(f => {
            const weatherText = f.Day.ThunderstormProbability >=65? 'thunder':'other'
            return {
                maxTemperature: f.Temperature.Maximum.Value,
                minTemperature: f.Temperature.Minimum.Value,
                date: f.Date,
                weatherIcon: getWeatherIcon(f.Day.CloudCover, f.Day.HasPrecipitation, weatherText)
            }
        })
        return forecastResponse
    } catch(error) {
        console.log(error)
        throw error
    }
}

const getWeatherIcon = (cloudCover: number, hasPrecipitation: boolean, text: string) => {
    if(text.toLowerCase().includes('thunder')) return weatherText.RAIN_THUNDER
    
    if(hasPrecipitation) return weatherText.RAIN

    if(cloudCover <= 30) return weatherText.SUNNY

    if(cloudCover <=70) return weatherText.PARTIAL_CLOUD

    return weatherText.CLOUDY
}