import axios from '../utility/axios-weather'
import { Autocomplete } from '../interfaces/accuweather'
import * as env from '../config'

export const autocomplete = async (query: string) => {
    const apikey = env.ACCUWEATHER_API_KEY
    const endpoint = `/cities/autocomplete?apikey=${apikey}&q=${query}`
    try {
        const response = await axios.get(endpoint)
        const data: any[] = response.data
        const autocompleteResponse: Autocomplete[]  = data.map(d  => {
            return {
                type: d.Type,
                key: d.Key,
                locationName: d.LocalizedName,
                country: {
                    id: d.Country.ID,
                    name: d.Country.LocalizedName
                },
                administrativeArea: {
                    id: d.AdministrativeArea.ID,
                    name: d.AdministrativeArea.LocalizedName
                }            
            }
        })
        return autocompleteResponse
    } catch(error) {
        throw error
    }
    
}