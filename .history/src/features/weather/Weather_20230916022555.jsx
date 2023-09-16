import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    fetchWeather,
    selectWeather,
    selectIsLoading,
    selectError,
} from './weatherSlice';

import './Weather.scss';

const Weather = () => {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [temp, setTemp] = useState('');
    const [description, setDescription] = useState('');
    const [weatherIcon, setWeatherIcon] = useState('');

    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("🚀 ~ file: Weather.jsx:23 ~ useEffect ~ position:", position);
                    console.log("🚀 ~ file: Weather.jsx:25 ~ useEffect ~ coords:", position.coords);
                    console.log("🚀 ~ file: Weather.jsx:33 ~ useEffect ~ latitude:", position.coords.latitude);
                    console.log("🚀 ~ file: Weather.jsx:35 ~ useEffect ~ longitude:", position.coords.longitude);

                    setLat(position.coords.latitude);
                    setLon(position.coords.longitude);
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        if (lat && lon) {
            dispatch(fetchWeather({ lat, lon }));
        }
    }, [dispatch, lat, lon]);

    useEffect(() => {
        if(weather) {
            setTemp(weather.main.temp);
            setDescription(weather.weather[0].description);
            setWeatherIcon(`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        }
    }, [weather]);

    // TODO: Fetch weather data from OpenWeatherMap API

    if(isLoading) {
        return <h1>Loading...</h1>;
    }

    if(error) {
        console.error(error.message || error);
        return <h1>Error: {error.message || error}</h1>;
    }

    return (
        <div className="weather-container">
            <div className="weather-icon"><img src={weatherIcon} alt={description} /></div>
            <div className="weather-info">
                <div className="weather-temp">{temp}&deg;</div>
                <div className="weather-description">{description}</div>
            </div>
        </div>
    );
}

export default Weather;