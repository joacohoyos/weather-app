import axios from '../utility/axios-weather'
import { Autocomplete } from '../interfaces/accuweather'

export const autocomplete = async (query: string) => {
    const apikey = process.env.ACCUWEATHER_API_KEY
    const endpoint = `/cities/autocomplete?apikey=${apikey}&q=${query}`
    try {
        console.log('gett')
        const response = await axios.get(endpoint)
        console.log(response)
        const data: Autocomplete[] = response.data
        const autocompleteResponse: Autocomplete[]  = data.map(d  => {
            return {
                Type: d.Type,
                Key: d.Key,
                LocalizedName: d.LocalizedName,
                Country: d.Country,
                AdministrativeArea: d.AdministrativeArea
            }
        })
        return autocompleteResponse
    } catch(error) {
        throw error
    }
    
}