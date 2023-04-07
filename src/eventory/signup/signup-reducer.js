import { createSlice } from "@reduxjs/toolkit";
import { userSignUpThunk } from "../../services/users-thunks";

const initialState = {
    signUpData: null,
    signUpStatus: 'idle',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userSignUpThunk.pending, (state) => {
                state.signUpStatus = 'pending';
            })
            .addCase(userSignUpThunk.fulfilled, (state, action) => {
                state.signUpStatus = 'fulfilled';
                state.signUpData = action.payload;
            })
            .addCase(userSignUpThunk.rejected, (state, action) => {
                state.signUpStatus = 'rejected';
                state.signUpData = action.payload;
            })
    }
});

export default userSlice.reducer;