import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    fullName: null,
    email: null,
    userID: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            console.log(action.payload);
            state.isLoggedIn = true;
            state.userID = action.payload.userID;
            state.email = action.payload.email;
        }
    }
});

export const { SET_ACTIVE_USER } = authSlice.actions
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectFname = (state) => state.auth.fullName;
export const selectEmail = (state) => state.auth.email;
export const selectUserID = (state) => state.auth.userID;
export default authSlice.reducer