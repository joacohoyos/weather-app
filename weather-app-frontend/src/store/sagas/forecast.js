import { put } from 'redux-saga/effects'
import {fetchForecastSuccess, fetchForecastFail} from '../actions'
import axios from '../../common/axios'

export function* fetchForecastSaga(action) {
    try {
        const forecast = yield axios.get(`forecast/${action.locationKey}?isMetric=${action.isMetric}`)
        yield put(fetchForecastSuccess(forecast.data))
    } catch(error) {
        yield put(fetchForecastFail(error))
    }
}


