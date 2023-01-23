import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    fname: null,
    email: null,
    userID: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            console.log(action.payload);
        }
    }
});

export const { SET_ACTIVE_USER } = authSlice.actions
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectFname = (state) => state.auth.fname;
export const selectEmail = (state) => state.auth.email;
export const selectUserID = (state) => state.auth.userID;
export default authSlice.reducer