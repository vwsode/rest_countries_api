import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '@store/theme/theme.slice.ts';
import countriesSlice from '@store/countries/countries.slice.ts';
import countrySlice from '@store/country/country.slice.ts';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        countries: countriesSlice,
        country: countrySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;