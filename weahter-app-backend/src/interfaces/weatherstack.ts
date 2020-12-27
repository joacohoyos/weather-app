export interface Autocomplete {
    request: {
        query: string,
        results: number
    },
    results: [{
        name: string,
        country: string,
        region: string,
        lon: string,
        lat: string,
        timezone_id: string,
        utc_offset: string
    }]
}
