import { createSlice } from '@reduxjs/toolkit'

const loginPageDetails = createSlice({
    name: 'login',
    initialState: { loginDetails: null },
    reducers: {
        loginSuccess: {
            reducer(state, {payload}) {
                state.loginDetails = payload;
            }
        },
        logoutSuccess: (state, action) => {
            localStorage.removeItem('authToken');
            state.loginDetails = null;
        },
    },
});

export const loginAction = (details) => async dispatch => {
    try {
        return dispatch(loginSuccess(details));
    } catch (e) {
        return console.error(e.message);
    }
}

export const logoutAction = async dispatch => {
    try {
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message);
    }
}


const { actions, reducer } = loginPageDetails;
export default reducer;
export const { loginSuccess, logoutSuccess } = actions;
