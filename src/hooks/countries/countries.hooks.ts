import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store.ts";
import {
    FetchCountriesParams,
    fetchCountries,
} from "@store/countries/countries.actions.ts";

const useCountries = () => {
    const { countries, isLoading, error } = useSelector(
        (state: RootState) => state.countries,
    );
    const dispatch = useDispatch<AppDispatch>();

    const getCountries = (params?: FetchCountriesParams) => {
        dispatch(fetchCountries(params));
    };

    return {
        countries,
        isLoading,
        error,
        getCountries,
    };
};

export default useCountries;
