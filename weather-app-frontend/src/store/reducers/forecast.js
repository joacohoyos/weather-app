import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../common/utility'

const initialState = {
    error: '',
    loading: false,
    forecast: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_FORECAST_START: return updateObject(state, {loading: true, forecast: []})
        case actionTypes.FETCH_FORECAST_SUCCESS: return updateObject(state, {loading: false, forecast: action.forecast})
        case actionTypes.FETCH_FORECAST_FAIL: return updateObject(state, {loading: false, error: action.error})
        default: return state
    }
}

export default reducer