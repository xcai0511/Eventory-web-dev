import { createSlice } from "@reduxjs/toolkit";
import {logOutThunk, profileThunk, signInThunk} from "../services/auth-thunks";

const initialState = {
    userStatus: 'idle',
    message: null,
    currentUser: null,
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
                state.userStatus = 'fulfilled';
                state.message = null;
                state.currentUser = action.payload.data;
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