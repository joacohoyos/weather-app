import { takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import { fetchWeatherSaga } from './weather'
import { fetchForecastSaga } from './forecast'
import { fetchCurrentLocationSaga, fetchLocationAutocompleteSaga } from './location'

export default function* watchSagas() {
    yield takeEvery(actionTypes.FETCH_WEATHER, fetchWeatherSaga)
    yield takeEvery(actionTypes.FETCH_FORECAST, fetchForecastSaga)
    yield takeEvery(actionTypes.FETCH_CURRENT_LOCATION, fetchCurrentLocationSaga)
    
}