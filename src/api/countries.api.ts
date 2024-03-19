import axios from 'axios';
import { serverURI } from '@config/api.config.ts';

import buildURLQuery from '../utils/helpers/buildQuery.helpers.ts';

const getAllCountries = async (params?: Object) => {
    const { data } = await axios.get(`${serverURI}/countries${params ? '?' + buildURLQuery(params) : ''}`);

    return data;
};

const getCountryById = async (id: string | number) => {
    const { data } = await axios.get(`${serverURI}/countries/${id}`);

    return data;
};

export {
    getCountryById,
    getAllCountries,
};