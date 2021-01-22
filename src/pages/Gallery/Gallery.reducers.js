export const GalleryReducer = {
    getImages: (state, action) => {
        state.images = action.payload;
    }
}