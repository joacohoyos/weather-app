import axios from 'axios'
import * as env from '../config'
 
const instance = axios.create({
    baseURL: env.ACCUWEATHER_BASE_URL
})

export default instance