import { createSlice } from '@reduxjs/toolkit';

import { HomeReducer } from './Home.reducers.jsx';
import { API } from '../../services/api/api';

const homePageDetails = createSlice({
    name: 'home',
    initialState: {configDetails: null},
    reducers: HomeReducer,
});

export const getBotDetialsAction = () => async (dispatch) => 
    { try{
        return API.fetchBotAdmin().then((data)=> dispatch(getBotDetials(data)))
        }
    catch (e) {
        return console.error(e.message);
    }
}

const { actions, reducer } = homePageDetails;
export default reducer;
export const { getBotDetials } = actions;