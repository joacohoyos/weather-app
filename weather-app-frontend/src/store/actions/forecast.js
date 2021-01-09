import * as actionTypes from './actionTypes'

export const fetchForecastStart = () =>{
    return {
        type: actionTypes.FETCH_FORECAST_START        
    }
}

export const fetchForecastSuccess = (forecast) =>{
    return {
        type: actionTypes.FETCH_FORECAST_SUCCESS,
        forecast        
    }
}

export const fetchForecastFail = (error) =>{
    return {
        type: actionTypes.FETCH_FORECAST_FAIL,
        error        
    }
}

export const fetchForecast = (locationKey, isMetric) => {
    return {
        type: actionTypes.FETCH_FORECAST,
        locationKey,
        isMetric
    }
}