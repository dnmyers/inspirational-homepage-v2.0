import {
    useState,
    useEffect
} from 'react';
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import {
    selectWeather,
    selectIsLoading,
    selectError,
    fetchWeather,
} from './weatherSlice';

import './Weather.scss';

const Weather = () => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');

    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    // Get lat and lon of user
    useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            });
        } else {
            console.log('Geolocation is not supported by this browser.');
            setLat(25.914);
            setLon(-97.4891);
        }
    }, [])

    useEffect(() => {
        dispatch(fetchWeather({ lat, lon }));
    }, [dispatch, lat, lon])

    if(isLoading) {
        return <h3>Loading...</h3>;
    }

    if(error) {
        return <h3>{error.message || error}</h3>;
    }

    return (
        <div className="weather">
            <h1>Weather</h1>
        </div>
    );
}

export default Weather;