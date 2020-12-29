import axios from 'axios'
import { ACCUWEATHER_BASE_URL } from '../config'
 
const instance = axios.create({
    baseURL: ACCUWEATHER_BASE_URL
})

export default instance