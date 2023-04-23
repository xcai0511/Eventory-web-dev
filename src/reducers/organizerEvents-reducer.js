import { createSlice } from '@reduxjs/toolkit';
import {
    deleteEventByEventIdThunk,
    fetchEventsByOrganizerIdThunk,
} from '../services/organizerEvent-thunks';

const initialState = {
    status: 'idle',
    events: null,
    error: null
};

const eventsSlice = createSlice({
    name: 'organizerEvents',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchEventsByOrganizerIdThunk.pending, (state) => {
                state.status = 'pending';
                state.events = null;
                state.error = null;
            })
            .addCase(fetchEventsByOrganizerIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.events = action.payload;
                state.error = null;
            })
            .addCase(fetchEventsByOrganizerIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.events = null;
                state.error = action.payload;
            })
            .addCase(deleteEventByEventIdThunk.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(deleteEventByEventIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(deleteEventByEventIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }});

export default eventsSlice.reducer;