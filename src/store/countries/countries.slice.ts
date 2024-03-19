import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "@store/countries/countries.actions.ts";
import { Country } from "@/types/country.type.ts";
// import queryString from "query-string";

const initialState: {
    countries: Country[];
    filteredCountries: Country[];
    isLoading: boolean;
    error: string;
} = {
    countries: [],
    filteredCountries: [],
    isLoading: false,
    error: "",
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        updateFilteredCountries: (state, action) => {
            const { region, q } = action.payload;
            let filteredCountries = state.countries;

            // Применяем фильтрацию по региону
            if (region) {
                filteredCountries = filteredCountries.filter(country => country.region === region);
            }

            // Применяем фильтрацию по запросу
            if (q) {
                filteredCountries = filteredCountries.filter(country => country.name.toLowerCase().includes(q.toLowerCase()));
            }

            state.filteredCountries = filteredCountries;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state, _) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.countries = action.payload;
            // При получении нового списка стран, обновляем отфильтрованные страны
            state.filteredCountries = action.payload;
        });
        builder.addCase(fetchCountries.rejected, (state, _) => {
            state.isLoading = false;
        });
    },
});

export const { updateFilteredCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
