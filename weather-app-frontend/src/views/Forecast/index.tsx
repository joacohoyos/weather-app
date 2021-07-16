import React from 'react'
import './Forecast.scss'
import ForecastCard from '../ForecastCard'
import { Forecast as ForecastInterface } from '../../common/interfaces'

interface ForecastProps {
    isMetric: boolean
    forecast: ForecastInterface[]
}

const Forecast = (props: ForecastProps) => {
    
    return (
        <div className="Forecast">
            {
            props.forecast.map(f => {
                return <ForecastCard forecast={f} isMetric={props.isMetric} key={f.date.toString()}/>})}
        </div>
    );
}

export default Forecast ;