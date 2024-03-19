import { createAsyncThunk } from '@reduxjs/toolkit';
import * as countriesApi from '@api/countries.api.ts';

export const fetchCountryById = createAsyncThunk(
    'countries/fetchCountryById', async (id: string | number) => {
        return await countriesApi.getCountryById(id);
    },
);