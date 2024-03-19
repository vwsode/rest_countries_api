import { createSlice } from '@reduxjs/toolkit';

import { fetchCountryById } from '@store/country/country.actions.ts';
import { Country } from '@/types/country.type.ts';

const initialState: {
    country: Country,
    isLoading: boolean,
    error: string,
} = {
    country: {} as Country,
    isLoading: false,
    error: '',
};

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCountryById.pending, (state, _) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCountryById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.country = action.payload;
        });
        builder.addCase(fetchCountryById.rejected, (state, _) => {
            state.isLoading = false;
        });
    },
});

export default countrySlice.reducer;