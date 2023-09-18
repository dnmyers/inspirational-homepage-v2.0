import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { apiKeys } from "../../apiKeys";

const initialState = {
    weather: {},
    isLoading: false,
    error: null,
};

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async ([ lat, lon ]) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather`,
                {
                    params: {
                        appid: apiKeys.openWeatherMap,
                        // lat: 25.914,
                        // lon: -97.4891,
                        lat,
                        lon,
                        units: 'imperial',
                        exclude: 'minutely,hourly,daily,alerts',
                    }
                }
            );

            console.group("weather/fetchWeather");
            console.dir(response.data);
            console.groupEnd();

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
);

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.isLoading = false;
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const selectWeather = (state) => state.weather.weather;
export const selectIsLoading = (state) => state.weather.isLoading;
export const selectError = (state) => state.weather.error;

export default weatherSlice.reducer;