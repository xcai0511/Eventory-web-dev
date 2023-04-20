import { createSlice } from '@reduxjs/toolkit';
import { userSignUpThunk } from '../services/auth-thunks';
import {updateUserProfileThunk, resetUserPasswordThunk, likeEventoryThunk} from '../services/users-thunk';
import { useDispatch } from 'react-redux';

const initialState = {
    error: null,
    userData: null,
    userStatus: 'idle',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // userDataUpdated: (state, action) => {
        //     state.userData = action.payload;
        // },
    },
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
            .addCase(updateUserProfileThunk.pending, (state) => {
                // add a new case for the new thunk
                state.userStatus = 'updating';
                console.log("updating user profile")
            })
            .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
                // add a new case for the new thunk
                state.userStatus = 'updated';
                state.userData = action.payload;
                console.log("updated user profile")
            })
            .addCase(updateUserProfileThunk.rejected, (state, action) => {
                state.userStatus = 'rejected';
                state.error = action.payload;
                console.log("update user profile rejected")
            })
            .addCase(resetUserPasswordThunk.pending, (state) => {
                state.userStatus = 'resetting';
            })
            .addCase(resetUserPasswordThunk.fulfilled, (state, action) => {
                state.userStatus = 'updated';
                state.userData = action.payload;
            })
            .addCase(resetUserPasswordThunk.rejected, (state, action) => {
                state.userStatus = 'rejected';
                state.error = action.payload;
            })
            .addCase(likeEventoryThunk.pending, (state) => {
                state.userStatus = 'liking/disliking eventory';
            })
            .addCase(likeEventoryThunk.fulfilled, (state, action) => {
                state.userStatus = 'liked/disliked eventory';
                state.userData = action.payload;
            })
            .addCase(likeEventoryThunk.fulfilled, (state, action) => {
                state.userStatus = 'rejected';
                state.error = action.payload;
            });
    },
});

export default userSlice.reducer;
