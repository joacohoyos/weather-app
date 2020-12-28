export interface Autocomplete {
    Type: string,
    Key: string,
    LocalizedName: string,
    Country: {
        ID: string,
        LocalizedName: string
    },
    AdministrativeArea: {
        ID: string,
        LocalizedName: string
    }
}

