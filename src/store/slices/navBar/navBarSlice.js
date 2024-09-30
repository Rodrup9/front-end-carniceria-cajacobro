import { createSlice } from '@reduxjs/toolkit';

const getState = () => {
    const initial = localStorage.getItem('navBar');
    if (!initial) {
        localStorage.setItem('navbar', 'true');
        return 'true';
    }

    return initial == 'true';

}

export const navBarSlice = createSlice({
    name: 'navBar',
    initialState: {
        state: getState(),
    },
    reducers: {
        toggle: (state) => {
            state.state = !state.state;
            localStorage.setItem('navBar', state.state);
        },
    }
});

export const { toggle } = navBarSlice.actions;