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
    async ({ lat, lon }) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather`,
                {
                    params: {
                        appid: apiKeys.openWeatherApiId,
                        lat,
                        lon,
                        units: 'imperial',
                        exclude: 'minutely,hourly,daily,alerts',
                    }
                }
            );

            const weather = response.data;
            return weather;
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
                state.error = action.error?.message || action.payload || "Oh, no! An error occurred while trying to fetch the weather!  Please try again.";
            });
    },
});

export const selectWeather = (state) => state.weather.weather;
console.log("🚀 ~ file: weatherSlice.jsx:64 ~ selectWeather:", selectWeather)
export const selectIsLoading = (state) => state.weather.isLoading;
export const selectError = (state) => state.weather.error;

export default weatherSlice.reducer;