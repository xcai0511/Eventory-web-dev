import { createSlice } from '@reduxjs/toolkit';
import {
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
    }});

export default eventsSlice.reducer;