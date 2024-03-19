import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store.ts';
import { fetchCountryById } from '@store/country/country.actions.ts';

const useCountry = () => {
    const { country, isLoading, error } = useSelector((state: RootState) => state.country);
    const dispatch = useDispatch<AppDispatch>();

    const getCountry = (id: number | string) => {
        dispatch(fetchCountryById(id));
    };

    return {
        country,
        isLoading,
        error,
        getCountry,
    };
};

export default useCountry;