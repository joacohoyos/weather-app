import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../common/utility'

const initialState = {
    isMetric: true,
    error: '',
    loading: false,
    weather: {
        weatherIcon:  0,
        temperature: {
            metric: 0,
            imperial: 0
        },
        humidity: 0, 
        wind: {
            metric: 0,
            imperial: 0
        },
        visibility: {
            metric: 0,
            imperial: 0
        },
        airPressure: {
            metric: 0,
            imperial: 0
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_WEATHER_START: return updateObject(state, {loading: true, weather: initialState.weather})
        case actionTypes.FETCH_WEATHER_SUCCESS: return updateObject(state, {loading: false, weather: action.weather})
        case actionTypes.FETCH_WEATHER_FAIL: return updateObject(state, {loading: false, error: action.error})
        case actionTypes.CHANGE_UNIT : return updateObject(state, {isMetric: action.isMetric})
        default: return state
    }
}

export default reducer