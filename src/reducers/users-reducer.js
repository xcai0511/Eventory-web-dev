import { createSlice } from "@reduxjs/toolkit";
import {userSignUpThunk} from "../services/auth-thunks";

const initialState = {
    userData: null,
    userStatus: 'idle',
};

const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(userSignUpThunk.pending, (state) => {
                    state.userStatus = 'pending';
                })
                .addCase(userSignUpThunk.fulfilled, (state, action) => {
                    state.userStatus = 'fulfilled';
                    state.userData = action.payload;
                })
                .addCase(userSignUpThunk.rejected, (state, action) => {
                    state.userStatus = 'rejected';
                    state.userData = action.payload;
                })
                // .addCase(signInThunk.pending, (state) => {
                //     state.userStatus = 'pending';
                // })
                // .addCase(signInThunk.fulfilled, (state, action) => {
                //     state.userStatus = 'fulfilled';
                //     // state.userData = action.payload.data;
                //     state.currentUser = action.payload.data;
                // })
                // .addCase(signInThunk.rejected, (state, action) => {
                //     state.userStatus = 'rejected';
                //     state.userData = action.payload;
                // })
                // .addCase(logOutThunk.fulfilled, (state) => {
                //     state.userStatus = 'idle';
                //     state.userData = null;
                //     state.currentUser = null;
                // })
                // .addCase(profileThunk.fulfilled, (state, action) => {
                //     state.userStatus = 'fulfilled';
                //     // state.userData = action.payload;
                //     state.currentUser = action.payload.data;
                // })
        }
    }
);

export default userSlice.reducer;