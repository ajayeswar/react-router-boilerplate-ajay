import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import Gallery from '../../pages/Gallery/Gallery.store.js';
import Home from '../../pages/Home/Home.store.jsx';
import Login from '../../pages/Login/Login.store.js';

const reducer = combineReducers({
    Home, Login, Gallery
})

const store = configureStore({
  reducer
})

export default store;