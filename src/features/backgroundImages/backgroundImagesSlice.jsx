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
                "https://api.unsplash.com/photos",
                {
                    params: {
                        "client_id": apiKeys.unsplashClientId,
                        "order_by": "popular",
                    },
                }
            );

            const backgroundImages = [];

            for(let image of response.data) {
                backgroundImages.push(image.urls.regular);
            }

            // console.group("backgroundImages/fetchBackgroundImages");
            // console.dir(response);
            // console.dir(response.data);
            // console.dir(response.data.urls);
            // console.groupEnd();
            console.dir(backgroundImages);
            return backgroundImages;
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

export const selectBackgroundImages = state => state.backgroundImages.backgroundImages;
export const selectIsLoading = state => state.backgroundImages.isLoading;
export const selectError = state => state.backgroundImages.error;

export default backgroundImagesSlice.reducer;