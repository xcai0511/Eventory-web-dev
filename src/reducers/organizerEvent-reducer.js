import { createSlice } from '@reduxjs/toolkit';
import {
    fetchEventByEventIdThunk, fetchEventsByOrganizerIdThunk,
    updateEventByEventIdThunk
} from '../services/organizerEvent-thunks';

const initialState = {
    status: 'idle',
    events: null,
    error: null
};

const eventSlice = createSlice({
    name: 'event',
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
            .addCase(fetchEventByEventIdThunk.pending, (state) => {
                state.status = 'pending';
                state.events = null;
                state.error = null;
            })
            .addCase(fetchEventByEventIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.events = action.payload;
                state.error = null;
            })
            .addCase(fetchEventByEventIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.events = null;
                state.error = action.payload;
            })
            .addCase(updateEventByEventIdThunk.pending, (state) => {
                state.status = 'pending';
                state.events = null;
                state.error = null;
                console.log("updateEventByEventIdThunk" + state.status);
            })
            .addCase(updateEventByEventIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.events = action.payload;
                state.error = null;
                console.log("updateEventByEventIdThunk" + state.status);
                console.log(JSON.stringify(state.events));
            })
            .addCase(updateEventByEventIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.events = null;
                state.error = action.payload;
                console.log("updateEventByEventIdThunk" + state.status);
                console.log(state.error);
            })
        ;
    },
});

export default eventSlice.reducer;