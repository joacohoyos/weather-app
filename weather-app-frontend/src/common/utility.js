import sunnyIcon from './icons/weather/day_clear.png'
import cloudyIcon from './icons/weather/cloudy.png'
import partialCloudIcon from './icons/weather/day_partial_cloud.png'
import thunderIcon from './icons/weather/rain_thunder.png'
import rainIcon from './icons/weather/rain.png'
import WeatherIcons from './WeatherIcons'

export const updateObject = (prevObject, updatedProps) => {
    return {
        ...prevObject,
        ...updatedProps
    }
}

export const readWeatherIcon = (weatherIcon) => {
    const weatherIconData = {
        weatherText: '',
        weatherIcon: ''
    }
    switch(weatherIcon){
        case WeatherIcons.SUNNY: 
            weatherIconData.weatherText = 'Sunny'
            weatherIconData.weatherIcon = sunnyIcon
            break
        case WeatherIcons.RAIN_THUNDER:
            weatherIconData.weatherText = 'Thunderstorm'
            weatherIconData.weatherIcon = thunderIcon
            break
        case WeatherIcons.RAIN:
            weatherIconData.weatherText = 'Shower'
            weatherIconData.weatherIcon = rainIcon
            break
        case WeatherIcons.PARTIAL_CLOUD:
            weatherIconData.weatherText = 'Partly Cloody'
            weatherIconData.weatherIcon = partialCloudIcon
            break
        case WeatherIcons.CLOUDY:
            weatherIconData.weatherText = 'Cloudy'
            weatherIconData.weatherIcon = cloudyIcon
            break
        default: 
            weatherIconData.weatherText = 'Sunny'
            weatherIconData.weatherIcon = sunnyIcon
            break
    }

    return weatherIconData
}