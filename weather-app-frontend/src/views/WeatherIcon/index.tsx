import React from 'react'
import './WeatherIcon.scss'

interface WeatherIconProps {
    src: string
    alt: string
}

const WeatherIcon = (props: WeatherIconProps) => {
    return (
        <div className="WeatherIcon">
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default WeatherIcon ;