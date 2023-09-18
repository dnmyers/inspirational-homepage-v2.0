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
    selectError
} from './weatherSlice';

import './Weather.scss';

const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    if(isLoading) {
        return <h3>Loading...</h3>;
    }

    if(error) {
        return <h3>{error.message || error.error.}</h3>;
    }

    return (
        <div className="weather">
            <h1>Weather</h1>
        </div>
    );
}

export default Weather;