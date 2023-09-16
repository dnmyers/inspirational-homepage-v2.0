/* eslint-disable no-unused-vars */
import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

import { apiKeys } from '../../apiKeys';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async ({ lat, lon, exclude = "minutely,hourly,daily,alerts", units = "imperial" }) => {
        try {
            const response = await axios.get(
                "https://api.openweathermap.org/data/2.5/weather",
                {
                    params: {
                        lat,
                        lon,
                        exclude,
                        units,
                        appid: apiKeys.openWeatherApiId,
                    },
                }
            );

            console.group("weather/fetchWeather");
            console.dir(response);
            console.dir(response.data);
            console.groupEnd();
            return response.data;
        } catch (error) {
            console.error(error);
            throw Error('There was a problem while trying to fetch the weather.  Please try again.');
        }
    }
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {
            // lat: 33.44,
            // lon: -94.04,
            // timezone: "America/Chicago",
            // timezone_offset: -18000,
            // current: {
            //     dt: 1627440000,
            //     sunrise: 1627390819,
            //     sunset: 1627442970,
            //     temp: 297.77,
            //     feels_like: 297.77,
            //     pressure: 1015,
            //     humidity: 78,
            //     dew_point: 293.71,
            //     uvi: 0,
            //     clouds: 75,
            //     visibility: 10000,
            //     wind_speed: 2.06,
            //     wind_deg: 0,
            //     wind_gust: 3.58,
            //     weather: [
            //         {
            //             id: 803,
            //             main: "Clouds",
            //             description: "broken clouds",
            //             icon: "04d",
            //         },
            //     ],
            // },

        },
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error?.message || "Oh, no! An error occurred while trying to fetch the weather!  Please try again.";
        });
    }
});

export const selectWeather = (state) => state.weather.weather;
export const selectIsLoading = (state) => state.weather.isLoading;
export const selectError = (state) => state.weather.error;

export default weatherSlice.reducer;