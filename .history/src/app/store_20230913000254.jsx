import {
    configureStore
} from '@reduxjs/toolkit';

import { backgroundImagesSlice } from '../features/backgroundImages/backgroundImagesSlice';
import { weatherSlice } from '../features/weather/weatherSlice';
import { quoteSlice } from '../features/quote/quoteSlice';

const store = configureStore({
    reducer: {
        backgroundImages: backgroundImagesSlice.reducer,
        weather: weatherSlice.reducer,
        quote: quoteSlice.reducer,
        // tasks: tasksSlice.reducer,
        // error: errorSlice.reducer,
    }
});

export default store;