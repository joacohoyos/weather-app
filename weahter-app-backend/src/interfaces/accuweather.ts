export interface Autocomplete {
    type: string,
    key: string,
    locationName: string,
    country: {
        id: string,
        name: string
    },
    administrativeArea: {
        id: string,
        name: string
    }
}

