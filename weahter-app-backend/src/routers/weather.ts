import express, {Router} from 'express'
import { getAutocomplete } from '../controllers/weather'

const router = Router()

router.get('/weather/autocomplete', getAutocomplete)

export default router