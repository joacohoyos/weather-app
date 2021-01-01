import React from 'react'
import WeatherIcon from '../WeatherIcon'
import './ForecastCard.scss'
import icon from '../../common/icons/weather/day_partial_cloud.png'

interface ForecastCardProps {

}

const ForecastCard = (props: ForecastCardProps) => {
    return (
        <div className="ForecastCard">
            <p className="ForecastDate"> Tomorrow</p>
            <WeatherIcon src={icon} alt="sunny icon"/>
            <div className="ForecastTemperature">
                <p> 18°C</p>
                <p>20°C</p>
            </div>
        </div>
    );
}

export default ForecastCard ;