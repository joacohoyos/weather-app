import React from 'react'
import icon from '../../common/icons/weather/day_clear.png'
import styles from './WeatherPanel.module.css'
import WeatherIcon from '../WeatherIcon'
import Button from '../UI/Button'

interface WeatherPanel {

}

const CurrentWeather: React.FC<WeatherPanel> = props => {
    return (
        <div className={styles.WeatherPanel}>
            <div className={styles.Header}>
                <Button btnType="Gray">Search for places</Button>  
                <Button btnType="Gray" rounded><i className="fas fa-map-marker-alt"></i></Button>
            </div>
            <div>
            <WeatherIcon src={icon} alt="Sunny icon"/>
            </div>
            <div>
                <h1 className={styles.Temperature}>15<span className={styles.Degree}>°C</span></h1>
                <h2 className={styles.WeatherText}>Shower</h2>
            </div>
            <div>
                <p>Today   -   Fri.5.Jun</p>
                <p>Buenos Aires</p>
            </div>
        </div>
    );
}

export default CurrentWeather ;