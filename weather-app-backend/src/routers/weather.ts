import express, {Router} from 'express'
import { getLocationsByAutocomplete, getLocationByGeoposition, getCurrentWeather, getForecastWeather } from '../controllers/weather'

const router = Router()

router.get('/weather/location/autocomplete', getLocationsByAutocomplete)
router.get('/weather/location/geoposition', getLocationByGeoposition)
router.get('/weather/current/:locationKey', getCurrentWeather)
router.get('/weather/forecast/:locationKey', getForecastWeather)

export default router