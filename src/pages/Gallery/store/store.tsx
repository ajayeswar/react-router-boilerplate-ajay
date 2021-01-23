import { createSlice } from '@reduxjs/toolkit';

import { GalleryReducer } from './reducers';
import { galleryState } from './state';

const galleryDetails = createSlice({
    name: 'gallery',
    initialState: galleryState,
    reducers: GalleryReducer,
});

export const { actions, reducer } = galleryDetails;