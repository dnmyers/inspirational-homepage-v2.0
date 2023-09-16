/* eslint-disable no-unused-vars */
import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuote = createAsyncThunk(
    'quote/fetchQuote',
    async () => {
        try {
            const response = await axios.get(
                'https://api.quotable.io/quotes/random',
                {
                    params: {
                        limit: 1,
                    },
                }
            );

            console.dir(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            throw Error('Unable to fetch quote.');
        }
    }
);

export const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: {

        },
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase('quote/fetchQuote/pending', (state, _action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase('quote/fetchQuote/fulfilled', (state, action) => {
            state.quote = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase('quote/fetchQuote/rejected', (state, action) => {
            state.isLoading = false;
            state.error = action.error?.message || 'Oh, no! An error occurred while trying to fetch a quote.  Please try again.';
        });
    }
});

export const selectQuote = (state) => state.quote.quote;
export const selectIsLoading = (state) => state.quote.isLoading;
export const selectError = (state) => state.quote.error;

export default quoteSlice.reducer;