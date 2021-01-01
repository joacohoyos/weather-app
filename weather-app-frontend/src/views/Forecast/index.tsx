import React from 'react'
import './Forecast.scss'
import ForecastCard from '../ForecastCard'

interface ForecastProps {

}

const Forecast = (props: ForecastProps) => {
    return (
        <div className="Forecast">
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
        </div>
    );
}

export default Forecast ;