import { put } from 'redux-saga/effects'
import {fetchCurrentLocationSuccess, fetchCurrentLocationFail, fetchLocationAutocompleteSuccess, fetchLocationAutocompleteFail} from '../actions'
import axios from '../../common/axios'

export function* fetchCurrentLocationSaga(action) {
    try {
        const location = yield axios.get(`location/geoposition?lat=${action.latitude}&long=${action.longitude}`)
        yield put(fetchCurrentLocationSuccess(location.data))
    } catch(error) {
        yield put(fetchCurrentLocationFail(error))
    }
}

