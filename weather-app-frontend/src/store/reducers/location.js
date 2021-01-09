import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../common/utility'

const initialState = {
    error: '',
    loading: false,
    location: null,
    locationName: '',
    locationKey: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_CURRENT_LOCATION_START: return updateObject(state, {loading: false, location: null, locationName: '', locationKey: null})
        case actionTypes.FETCH_CURRENT_LOCATION_SUCCESS: return updateObject(state, {loading: false, location: action.location, locationName: action.location.locationName, locationKey: action.location.key})
        case actionTypes.FETCH_CURRENT_LOCATION_FAIL: return updateObject(state, {loading: false, error: action.error})
        case actionTypes.SET_LOCATION: return updateObject(state, {location: action.location, locationName: action.location.locationName, locationKey: action.location.key})
        default: return state
    }
}

export default reducer