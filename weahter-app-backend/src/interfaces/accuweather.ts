export interface Location {
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

export interface Weather {
    weatherIcon: string,
    temperature: {
        metric: number,
        imperial: number
    },
    humidity: number, 
    wind: {
        metric: number,
        imperial: number
    },
    visibility: {
        metric: number
        imperial: number
    },
    airPressure: {
        metric: number
        imperial: number
    }
}

export interface Forecast {
    maxTemperature: number, 
    minTemperature: number, 
    date: Date,
    weatherIcon: string
}