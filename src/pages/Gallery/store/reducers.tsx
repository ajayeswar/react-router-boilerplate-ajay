export const GalleryReducer = {
    getImages: (state: { images: any; }, action: { payload: any; }) => {
        state.images = action.payload;
    }
}