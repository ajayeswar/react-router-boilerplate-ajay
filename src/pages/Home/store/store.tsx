import { createSlice } from '@reduxjs/toolkit';

import { HomeReducer } from './reducers.jsx';
import { initialHomeState } from './state';

const homePageDetails = createSlice({
    name: 'home',
    initialState: initialHomeState,
    reducers: HomeReducer,
});

export const { actions, reducer } = homePageDetails;