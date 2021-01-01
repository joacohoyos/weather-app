import React from 'react'
import Button from '../UI/Button'
import './WeatherInfo.scss'
import Forecast from '../Forecast'
import Highlights from '../Highlights'

interface WeatherInfoProps {

}

const WeatherInfo = (props: WeatherInfoProps) => {
    return (
        <div className="WeatherInfo">
            <div className="Container">
                <div className="Header">
                    <Button color="Gray" active rounded>°C</Button>
                    <Button color="Gray" rounded>°F</Button>
                </div>
                <Forecast />
                <Highlights />
            </div>
        </div>
    );
}

export default WeatherInfo ;