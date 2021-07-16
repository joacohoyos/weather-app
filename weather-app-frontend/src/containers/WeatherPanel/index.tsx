import React, { ChangeEvent, useEffect, useState } from 'react'
import './WeatherPanel.scss'
import WeatherIcon from '../../views/WeatherIcon'
import Button from '../../views/UI/Button'
import { connect, useDispatch } from 'react-redux'
import { fetchCurrentLocation, fetchWeather } from '../../store/actions'
import dateFormat from 'dateformat'
import { readWeatherIcon } from '../../common/utility'
import SearchPanel from '../SearchPanel'

interface WeatherPanel {
    metricTemperature: number,
    imperialTemperature: number,
    isMetric: boolean,
    weatherIcon: number,
    locationName: string,
    locationKey: string
}

const CurrentWeather = (props: WeatherPanel) => {

    const dispatch = useDispatch()
    const [showSearchPanel, setShowSearchPanel] = useState(false)



    useEffect(() => {
        if(props.locationKey){
            dispatch(fetchWeather(props.locationKey))
        }
    }, [props.locationKey])
    
    const weatherIconData = readWeatherIcon(props.weatherIcon)
    
    const searchButtonHandler = () => {
        setShowSearchPanel(true)
    }

    const backButtonHandler = () => {
        setShowSearchPanel(false)
    }


    const locationButtonHandler =  () => {
        navigator.geolocation.getCurrentPosition(position => {
            dispatch(fetchCurrentLocation(position.coords.latitude, position.coords.longitude))
        })
    }


    return (
        <div className="WeatherPanel">
            <SearchPanel confirmSearch={backButtonHandler} backClicked={backButtonHandler } show={showSearchPanel}/>
            <div className="Header">
                <Button color="Gray" clicked={searchButtonHandler}>Search for places</Button>  
                <Button color="Gray" rounded clicked={locationButtonHandler}><i className="fas fa-map-marker-alt IconWrapper"></i></Button>
            </div>
            <div className="Wrapper">
            <WeatherIcon src={weatherIconData.weatherIcon} alt="Weather icon"/>
            </div>
            <div className="Wrapper">
                <h1 className="Temperature">{props.isMetric? props.metricTemperature : props.imperialTemperature}<span className="Degree">{props.isMetric? '°C' : '°F'}</span></h1>
                <h2 className="WeatherText">{weatherIconData.weatherText}</h2>
            </div>
            <div className="Wrapper">
                <p>Today   -   {dateFormat(new Date(), 'ddd.d.mmm')}</p>
                <p>{props.locationName}</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        metricTemperature: state.weather.weather.temperature.metric,
        imperialTemperature: state.weather.weather.temperature.imperial,
        weatherIcon: state.weather.weather.weatherIcon,
        isMetric: state.weather.isMetric,
        locationName: state.location.locationName,
        locationKey: state.location.locationKey
    }
}

export default connect(mapStateToProps)(CurrentWeather) ;