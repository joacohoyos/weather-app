import React from 'react'
import WeatherIcon from '../WeatherIcon'
import './ForecastCard.scss'
import { Forecast } from '../../common/interfaces'
import { readWeatherIcon } from '../../common/utility'
import dateFormat from 'dateformat'

interface ForecastCardProps {
    isMetric: boolean
    forecast: Forecast
}

const ForecastCard = (props: ForecastCardProps) => {
    
    const weatherIconData = readWeatherIcon(props.forecast.weatherIcon)

    return (
        <div className="ForecastCard">
            <p className="ForecastDate">{dateFormat(props.forecast.date, 'DDDD') === 'Tomorrow'? 'Tomorrow' : dateFormat(props.forecast.date, 'ddd, d mmm')}</p>
            <WeatherIcon src={weatherIconData.weatherIcon} alt="weather icon"/>
            <div className="ForecastTemperature">
                <p>{props.forecast.minTemperature} {props.isMetric? ' °C' : ' °F'}</p>
                <p>{props.forecast.maxTemperature} {props.isMetric? ' °C' : ' °F'}</p>
            </div>
        </div>
    );
}

export default ForecastCard ;