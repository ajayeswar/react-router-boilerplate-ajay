import { InitialHomeStateInterface } from './state';

export const HomeReducer = {
    getBotDetials: (state: InitialHomeStateInterface, action: { payload: { [key: string]: any } }) => {
        state.configDetails = action.payload;
    }
}