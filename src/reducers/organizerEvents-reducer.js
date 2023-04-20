import { createSlice } from '@reduxjs/toolkit';
import {
    deleteEventByEventIdThunk,
    fetchEventsByOrganizerIdThunk,
} from '../services/organizerEvent-thunks';

const initialState = {
    status: 'idle',
    events: null,
    error: null // string? json object?
};

const eventsSlice = createSlice({
    name: 'events',
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
                console.log("deleteEventByEventIdThunk.pending")
                state.status = 'pending';
                // state.events = null;
                state.error = null;
            })
            .addCase(deleteEventByEventIdThunk.fulfilled, (state, action) => {
                console.log("deleteEventByEventIdThunk.fulfilled")
                state.status = 'pending';
                // state.events = null; // TODO
                state.error = null;
            })
            .addCase(deleteEventByEventIdThunk.rejected, (state, action) => {
                console.log("deleteEventByEventIdThunk.rejected");
                state.status = 'pending';
                // state.events = null;
                state.error = null;
            })
    }});

export default eventsSlice.reducer;