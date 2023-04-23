import { createSlice } from '@reduxjs/toolkit';
import {
    fetchEventByEventIdThunk,
    updateEventByEventIdThunk
} from '../services/organizerEvent-thunks';

const initialState = {
    status: 'idle',
    event: null,
    error: null
};

const eventSlice = createSlice({
    name: 'organizersEvent',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchEventByEventIdThunk.pending, (state) => {
                state.status = 'pending';
                state.event = null;
                state.error = null;
            })
            .addCase(fetchEventByEventIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.event = action.payload;
                state.error = null;
            })
            .addCase(fetchEventByEventIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.event = null;
                state.error = action.payload;
            })
            .addCase(updateEventByEventIdThunk.pending, (state) => {
                state.status = 'pending';
                state.event = null;
                state.error = null;
            })
            .addCase(updateEventByEventIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.event = action.payload;
                state.error = null;
            })
            .addCase(updateEventByEventIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.event = null;
                state.error = action.payload;
            })
        ;
    },
});

export default eventSlice.reducer;