import { createSlice } from '@reduxjs/toolkit';

import { GalleryReducer } from './Gallery.reducers.js';
import { API } from '../../services/api/api'

const galleryDetails = createSlice({
    name: 'gallery',
    initialState: {images: null},
    reducers: GalleryReducer,
});

export const getImagesAction = () => async dispatch => {
    try{
        return API.unsplashAPI(1).then((data)=> dispatch(getImages(data)))
    }
    catch (e) {
        return console.error(e.message);
    }
}

const { actions, reducer } = galleryDetails;
export default reducer;
export const { getImages } = actions;