import { createSlice } from '@reduxjs/toolkit';
import { createEventThunk } from '../services/createEvent-thunks';

const initialState = {
    status: 'idle',
    message: null,
    event: null,
};

const createEventSlice = createSlice({
    name: 'createEvent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createEventThunk.pending, (state) => {
                state.status = 'pending';
                state.message = null;
                state.event = null;
            })
            .addCase(createEventThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.message = null;
                state.event = action.payload;
            })
            .addCase(createEventThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.message = action.payload;
                state.event = null;
            });
    },
});

export default createEventSlice.reducer;