import { createSlice } from '@reduxjs/toolkit';
import { organizerSignUpThunk } from "../services/auth-thunks";

const initialState = {
    error: null,
    organizerData: null,
    organizerStatus: 'idle',
};

const organizerSlice = createSlice( {
    name: 'organizer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(organizerSignUpThunk.pending, (state) => {
                state.organizerStatus = 'pending';
            })
            .addCase(organizerSignUpThunk.fulfilled, (state, action) => {
                state.organizerStatus = 'fulfilled';
                state.organizerData = action.payload;
            })
            .addCase(organizerSignUpThunk.rejected, (state, action) => {
                state.organizerStatus = 'rejected';
                state.organizerData = action.payload;
            });
    }
});

export default organizerSlice.reducer;