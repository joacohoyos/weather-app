import React from 'react'
import icon from '../../common/icons/weather/day_clear.png'
import './WeatherPanel.scss'
import WeatherIcon from '../WeatherIcon'
import Button from '../UI/Button'

interface WeatherPanel {

}

const CurrentWeather = (props: WeatherPanel) => {
    return (
        <div className="WeatherPanel">
            <div className="Header">
                <Button color="Gray">Search for places</Button>  
                <Button color="Gray" rounded><i className="fas fa-map-marker-alt IconWrapper"></i></Button>
            </div>
            <div className="Wrapper">
            <WeatherIcon src={icon} alt="Sunny icon"/>
            </div>
            <div className="Wrapper">
                <h1 className="Temperature">15<span className="Degree">°C</span></h1>
                <h2 className="WeatherText">Shower</h2>
            </div>
            <div className="Wrapper">
                <p>Today   -   Fri.5.Jun</p>
                <p>Buenos Aires</p>
            </div>
        </div>
    );
}

export default CurrentWeather ;