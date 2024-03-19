import { createAsyncThunk } from "@reduxjs/toolkit";
import * as countriesApi from "@api/countries.api.ts";

export type FetchCountriesParams = {
    region?: string;
    q?: string;
    _limit?: string | number;
};

export const fetchCountries = createAsyncThunk(
    "countries/fetchCountries",
    async (params?: FetchCountriesParams) => {
        return await countriesApi.getAllCountries(params);
    },
);
