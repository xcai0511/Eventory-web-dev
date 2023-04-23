import { createSlice } from "@reduxjs/toolkit";
import {eventFilterThunk, eventIdThunk, eventThunk} from "../services/eventory-thunks";

const initialState = {
    result: [],
    detail: [],
    loading: false
}

const eventoryEventSlice = createSlice({
    name: "usersEvent",
    initialState,
    extraReducers: {
        [eventThunk.pending]:
            (state) => {
                state.loading = true
                state.result = []
                state.detail = []
            },
        [eventThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.result = payload
                state.detail = []
            },
        [eventThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.result = action.payload.message
                state.detail = []
            },
        [eventFilterThunk.pending]:
            (state) => {
                state.loading = true
                state.result = []
                state.detail = []
            },
        [eventFilterThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.result = payload
                state.detail = []
            },
        [eventFilterThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.result = action.payload.message
                state.detail = []
            },
        [eventIdThunk.pending]:
            (state) => {
                state.loading = true
                state.detail = []
            },
        [eventIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.detail = payload
            },
        [eventIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.detail = action.payload.message
            }
    },
});

export default eventoryEventSlice.reducer;