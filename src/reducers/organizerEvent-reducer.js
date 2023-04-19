import { createSlice } from '@reduxjs/toolkit';
import { fetchEventsByOrganizerIdThunk } from '../services/organizerEvent-thunks';

const initialState = {
    status: 'idle',
    events: [],
    error: null // string? json object?
};

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventsByOrganizerIdThunk.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(fetchEventsByOrganizerIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';

                console.log(state.status);console.log(action.payload);
                state.events = action.payload;
            })
            .addCase(fetchEventsByOrganizerIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                console.log(action.payload);
                state.error = action.payload;
            });
    },
});

export default eventSlice.reducer;