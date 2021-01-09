import * as actionTypes from './actionTypes'

export const fetchWeatherStart = () =>{
    return {
        type: actionTypes.FETCH_WEATHER_START        
    }
}

export const fetchWeatherSuccess = (weather) =>{
    return {
        type: actionTypes.FETCH_WEATHER_SUCCESS,
        weather        
    }
}

export const fetchWeatherFail = (error) =>{
    return {
        type: actionTypes.FETCH_WEATHER_FAIL,
        error        
    }
}

export const fetchWeather = (locationKey) => {
    return {
        type: actionTypes.FETCH_WEATHER,
        locationKey
    }
}

export const changeUnit = (isMetric) => {
    return {
        type: actionTypes.CHANGE_UNIT,
        isMetric
    }
}