import { put } from 'redux-saga/effects'
import {fetchWeatherSuccess, fetchWeatherFail} from '../actions'
import axios from '../../common/axios'

export function* fetchWeatherSaga(action) {
    try {
        const weather = yield axios.get(`current/${action.locationKey}`)
        yield put(fetchWeatherSuccess(weather.data))
    } catch(error) {
        yield put(fetchWeatherFail(error))
    }
}


