/* eslint-disable no-unused-vars */
import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

import { apiKeys } from '../../apiKeys';

export const fetchBackgroundImages =  createAsyncThunk(
    'backgroundImages/fetchBackgroundImages',
    async () => {
        try {
            // Make an API request to Unsplash
            const response = await axios.get(
                "https://api.unsplash.com/photos/random",
                {
                    params: {
                        "client_id": apiKeys.unsplashClientId,
                    },
                }
            );

            console.group("backgroundImages/fetchBackgroundImages");

            console.dir(response.data.urls);
            console.groupEnd();
            return response.data.urls;
        } catch (error) {
            console.error(error);
            throw Error;
        }
    }
);

const initialState = {
    backgroundImages: [],
    isLoading: false,
    error: null,
};

export const backgroundImagesSlice = createSlice({
    name: 'backgroundImages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBackgroundImages.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchBackgroundImages.fulfilled, (state, action) => {
            state.backgroundImages = action.payload;
            state.isLoading = false;
            state.error = null;
        });

        builder.addCase(fetchBackgroundImages.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export default backgroundImagesSlice.reducer;