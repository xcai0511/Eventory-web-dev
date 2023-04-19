import { createSlice } from "@reduxjs/toolkit";
import {eventFilterThunk, eventIdThunk, eventThunk} from "../../services/eventory-thunks";

const initialState = {
    result: [],
    detail: [],
    loading: false
}

const eventoryEventSlice = createSlice({
    name: "event",
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
                state.result = action.error
                state.detail = []
            },
        [eventFilterThunk.pending]:
            (state) => {
                state.loading = true
                state.result = []
                state.detail = []
                console.log("event filter thunk pending")
            },
        [eventFilterThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.result = payload
                state.detail = []
                console.log("event filter thunk fulfill")
                console.log(payload)
            },
        [eventFilterThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.result = action.error
                state.detail = []
                console.log("event filter thunk reject")
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
                state.detail = action.error
            }
    },

});

export default eventoryEventSlice.reducer;