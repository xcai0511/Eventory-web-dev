import { createSlice } from '@reduxjs/toolkit';
import { userSignUpThunk } from '../services/auth-thunks';
import { updateUserProfileThunk } from '../services/users-thunk';

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
            .addCase(updateUserProfileThunk.pending, (state) => {
                // add a new case for the new thunk
                state.userStatus = 'updating';
            })
            .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
                // add a new case for the new thunk
                state.userStatus = 'updated';
                state.userData = action.payload;
            })
            .addCase(updateUserProfileThunk.rejected, (state, action) => {
                // add a new case for the new thunk
                state.userStatus = 'updateFailed';
                state.userData = action.payload;
            });
    },
});

export default userSlice.reducer;
