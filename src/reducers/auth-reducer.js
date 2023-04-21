import { createSlice } from "@reduxjs/toolkit";
import {logOutThunk, profileThunk, signInThunk} from "../services/auth-thunks";

const initialState = {
    userStatus: 'idle',
    message: null,
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInThunk.pending, (state) => {
                state.userStatus = 'pending';
                state.message = null;
                state.currentUser = null;
            })
            .addCase(signInThunk.fulfilled, (state, action) => {
                console.log('fulfilled');
                state.userStatus = 'fulfilled';
                state.message = null;
                state.currentUser = action.payload.data;
                localStorage.setItem('currentUser', JSON.stringify(action.payload.data))
            })
            .addCase(signInThunk.rejected, (state, action) => {
                state.userStatus = 'rejected';
                state.message = action.payload;
                state.currentUser = null;
            })
            .addCase(logOutThunk.fulfilled, (state) => {
                state.userStatus = 'idle';
                state.message = null;
                state.currentUser = null;
            })
            .addCase(profileThunk.fulfilled, (state, action) => {
                state.userStatus = 'fulfilled';
                state.message = null;
                state.currentUser = action.payload.data;
            })
    }
});

export default authSlice.reducer;


