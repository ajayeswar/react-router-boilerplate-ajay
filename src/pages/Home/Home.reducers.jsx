export const HomeReducer = {
    getBotDetials: (state, action) => {
        state.configDetails = action.payload;
    }
}