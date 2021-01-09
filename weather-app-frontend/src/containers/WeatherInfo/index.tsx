import React, { useEffect } from 'react'
import Button from '../../views/UI/Button'
import './WeatherInfo.scss'
import Forecast from '../../views/Forecast'
import Highlights from '../../views/Highlights'
import { connect, useDispatch } from 'react-redux'
import { changeUnit, fetchForecast } from '../../store/actions'
import { Highlights as HighlightsInterface } from '../../common/interfaces'
import { Forecast as ForecastInterface } from '../../common/interfaces'

interface WeatherInfoProps {
    isMetric: boolean
    highlights: HighlightsInterface
    forecast: ForecastInterface[],
    locationKey: string
}

const WeatherInfo = (props: WeatherInfoProps) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if(props.locationKey){
            dispatch(fetchForecast(props.locationKey, props.isMetric)) 
        }
    },[props.locationKey])

    const metricButtonHandler = () => {
        if(!props.isMetric && props.locationKey){
            dispatch(fetchForecast(props.locationKey, true))
        }
        dispatch(changeUnit(true))
    }
    
    const imperialButtonHandler = () => {
        if(props.isMetric && props.locationKey){
            dispatch(fetchForecast(props.locationKey, false))
        }
        dispatch(changeUnit(false))
    }

    return (
        <div className="WeatherInfo">
            <div className="Container">
                <div className="Header">
                    <Button color="Gray" active={props.isMetric} rounded clicked={metricButtonHandler}>°C</Button>
                    <Button color="Gray" active={!props.isMetric} rounded clicked={imperialButtonHandler}>°F</Button>
                </div>
                <Forecast isMetric={props.isMetric} forecast={props.forecast} />
                <Highlights isMetric={props.isMetric} highlights={props.highlights}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        isMetric: state.weather.isMetric,
        highlights: {
            wind: {...state.weather.weather.wind},
            humidity: state.weather.weather.humidity,
            visibility: {...state.weather.weather.visibility},
            airPressure: {...state.weather.weather.airPressure}
        },
        forecast: state.forecast.forecast,
        locationKey: state.location.locationKey

    }
}

export default connect(mapStateToProps)(WeatherInfo) ;