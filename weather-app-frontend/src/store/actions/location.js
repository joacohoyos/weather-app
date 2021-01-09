import * as actionTypes from './actionTypes'

export const fetchCurrentLocationStart = () =>{
    return {
        type: actionTypes.FETCH_CURRENT_LOCATION        
    }
}

export const fetchCurrentLocationSuccess = (location) =>{
    return {
        type: actionTypes.FETCH_CURRENT_LOCATION_SUCCESS,
        location        
    }
}

export const fetchCurrentLocationFail = (error) =>{
    return {
        type: actionTypes.FETCH_CURRENT_LOCATION_FAIL,
        error        
    }
}

export const fetchCurrentLocation = (latitude, longitude) => {
    return {
        type: actionTypes.FETCH_CURRENT_LOCATION,
        latitude,
        longitude
    }
}

export const setLocation = (location) => {
    return {
        type: actionTypes.SET_LOCATION,
        location
    }
}