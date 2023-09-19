import { useState, useEffect, CSSProperties } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectWeather,
    selectIsLoading,
    selectError,
    fetchWeather,
} from "./weatherSlice";
import { CircleLoader } from "react-spinners";

import "./Weather.scss";

const Weather = () => {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [temp, setTemp] = useState(0);
    const [description, setDescription] = useState("");
    const [weatherIcon, setWeatherIcon] = useState("");

    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    // Get lat and lon of user
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let latitude = position.coords.latitude;
                    console.log("🚀 ~ file: Weather.jsx:31 ~ useEffect ~ latitude:", latitude)
                    let longitude = position.coords.longitude;
                    console.log("🚀 ~ file: Weather.jsx:33 ~ useEffect ~ longitude:", longitude)

                    if (latitude && longitude) {
                        setLat(latitude);
                        setLon(longitude);
                    }
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
            alert(
                "Geolocation is not supported by this browser or location access was blocked. Setting location to Brownsville, TX. Please allow location permission or try a different browser."
            );
            setLat(25.914);
            setLon(-97.4891);
        }
    }, []);

    useEffect(() => {
        if(lat && lon) {
            console.log("🚀 ~ file: Weather.jsx:56 ~ useEffect ~ lon:", lon)
            console.log("🚀 ~ file: Weather.jsx:56 ~ useEffect ~ lat:", lat)
            dispatch(fetchWeather({ lat, lon }));
        }
    }, [dispatch, lat, lon]);

    useEffect(() => {
        setDescription(weather.weather[0].description);
        setTemp(weather.main.temp);
        setWeatherIcon(
            `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        );
    }, [weather, lat, lon]);

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    if (error) {
        return <h3>{error.message || error}</h3>;
    }

    return (
        <div className='weather-container'>
            <div className='weather-icon'>
                <img src={weatherIcon} alt={description} />
            </div>
            <div className='weather-info'>
                <div className='weather-temp'>{temp}&deg;</div>
                <div className='weather-description'>{description}</div>
            </div>
        </div>
    );
};

export default Weather;