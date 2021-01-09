export interface Highlights {
    wind: {
        metric: number,
        imperial: number
    },
    humidity: number,
    airPressure: {
        metric: number,
        imperial: number
    },
    visibility: {
        metric: number,
        imperial: number
    }
}

export interface Forecast {
    maxTemperature: number,
    minTemperature: number,
    date: Date,
    weatherIcon: number
    
}