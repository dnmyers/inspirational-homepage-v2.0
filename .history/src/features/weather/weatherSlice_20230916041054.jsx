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
    async (city) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys.openWeather}`
            );
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
);

const weatherSlice = createSlice({
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
