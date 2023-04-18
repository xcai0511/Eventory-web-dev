import { createSlice } from "@reduxjs/toolkit";
import {eventFilterThunk, eventThunk} from "../../services/event-thunks";

const initialState = {
    result: [],
    loading: false
}

const eventSlice = createSlice({
    name: "event",
    initialState,
    extraReducers: {
        [eventThunk.pending]:
            (state) => {
                state.loading = true
                state.result = []
            },
        [eventThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.result = payload
            },
        [eventThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.result = action.error
            },
        [eventFilterThunk.pending]:
            (state) => {
                state.loading = true
                state.result = []
            },
        [eventFilterThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.result = payload
            },
        [eventFilterThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.result = action.error
            }
    },

});

export default eventSlice.reducer;