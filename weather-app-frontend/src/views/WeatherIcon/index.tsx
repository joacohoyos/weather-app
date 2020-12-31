import React from 'react'
import styles from './WeatherIcon.module.css'

interface WeatherIconProps {
    src: string
    alt: string
}

const WeatherIcon: React.FC<WeatherIconProps> = props => {
    return (
        <div className={styles.WeatherIcon}>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default WeatherIcon ;