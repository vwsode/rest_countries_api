import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store.ts';

import { toggleTheme } from '@store/theme/theme.slice.ts';

const useTheme = () => {
    const { mode } = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch<AppDispatch>();

    const setTheme = (theme: 'light' | 'dark'): void => {
        dispatch(toggleTheme(theme));
    };

    return {
        mode,
        setTheme,
    };
};

export default useTheme;