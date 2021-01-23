import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { reducer as Gallery } from '../../pages/Gallery/store/store';
import { reducer as Home } from '../../pages/Home/store/store';
import Login from '../../pages/Login/Login.store.js';

const reducer = combineReducers({
    Home, Login, Gallery
})

const store = configureStore({
    reducer
})

export default store;
export type RootState = ReturnType<typeof reducer>