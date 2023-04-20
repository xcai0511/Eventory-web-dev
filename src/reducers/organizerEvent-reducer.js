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
    name: 'event',
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
                console.log(action);
                state.error = action.payload;
            })
            .addCase(updateEventByEventIdThunk.pending, (state) => {
                state.status = 'pending';
                state.event = null;
                state.error = null;
                console.log("updateEventByEventIdThunk" + state.status);
            })
            .addCase(updateEventByEventIdThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.event = action.payload;
                state.error = null;
                console.log("updateEventByEventIdThunk" + state.status);
                console.log(JSON.stringify(state.event));
            })
            .addCase(updateEventByEventIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.event = null;
                state.error = action.payload;
                console.log("updateEventByEventIdThunk" + state.status);
                console.log(state.error);
            })
        ;
    },
});

export default eventSlice.reducer;