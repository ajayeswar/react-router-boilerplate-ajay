import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import Gallery from '../../pages/Gallery/Gallery.store.js';
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