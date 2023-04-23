import { createSlice } from '@reduxjs/toolkit';
import { userSignUpThunk } from '../services/auth-thunks';
import {
    updateUserProfileThunk,
    resetUserPasswordThunk,
    likeEventoryThunk,
    likeTicketmasterThunk,
} from '../services/users-thunk';

const initialState = {
    error: null,
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
            .addCase(updateUserProfileThunk.pending, (state) => {
                state.userStatus = 'updating';
            })
            .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
                state.userStatus = 'updated';
                state.userData = action.payload;
            })
            .addCase(updateUserProfileThunk.rejected, (state, action) => {
                state.userStatus = 'rejected';
                state.error = action.payload;
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
                state.userStatus = 'pending';
            })
            .addCase(likeEventoryThunk.fulfilled, (state, action) => {
                state.userStatus = 'fulfilled';
                state.userData = action.payload;
            })
            .addCase(likeEventoryThunk.rejected, (state, action) => {
                state.userStatus = 'rejected';
                state.error = action.payload;
            })
            .addCase(likeTicketmasterThunk.pending, (state) => {
                state.userStatus = 'pending';
            })
            .addCase(likeTicketmasterThunk.fulfilled, (state, action) => {
                state.userStatus = 'fulfilled';
                state.userData = action.payload;
            })
            .addCase(likeTicketmasterThunk.rejected, (state, action) => {
                state.userStatus = 'rejected';
                state.error = action.payload;
            });
    },
});

export default userSlice.reducer;