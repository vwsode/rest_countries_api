import { createSlice } from '@reduxjs/toolkit';

export type Theme = {
    mode: 'light' | 'dark'
}

const initialState: Theme = {
    mode: 'dark',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.mode = action.payload;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;