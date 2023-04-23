import { findOrganizerByIdThunk, findUserByIdThunk } from '../services/anonymous-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle',
    message: null,
    data: null,
};

const anonymousSlice = createSlice({
    name: 'anonymous',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(findUserByIdThunk.pending, (state) => {
                state.status = 'pending';
                state.message = null;
            })
            .addCase(findUserByIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.message = null;
                state.data = action.payload.data;
            })
            .addCase(findUserByIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.message = action.payload;
                state.data = null;
            })
            .addCase(findOrganizerByIdThunk.pending, (state) => {
                state.status = 'pending';
                state.message = null;
                state.data = null;
            })
            .addCase(findOrganizerByIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.message = null;
                state.data = action.payload.data;
            })
            .addCase(findOrganizerByIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.message = action.payload;
                state.data = null;
            });
    },
});

export default anonymousSlice.reducer;