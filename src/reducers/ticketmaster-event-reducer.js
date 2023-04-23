import { createSlice } from "@reduxjs/toolkit";
import {searchEventDetailThunk, searchFilterThunk, searchThunk} from "../services/ticketmaster-thunks";

const initialState = {
    result: [],
    detail: [],
    loading: false
}

const ticketmasterEventSlice = createSlice({
    name: "result",
    initialState,
    extraReducers: {
        [searchThunk.pending]:
            (state) => {
                state.loading = true
                state.result = []
                state.detail = []
            },
        [searchThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.result = payload
                state.detail = []
            },
        [searchThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.result = action.payload.message
                state.detail = []
            },
        [searchFilterThunk.pending]:
            (state) => {
                state.loading = true
                state.result = []
                state.detail = []
            },
        [searchFilterThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.result = payload
                state.detail = []
            },
        [searchFilterThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.result = action.payload.message
                state.detail = []
            },
        [searchEventDetailThunk.pending]:
            (state) => {
                state.loading = true
                state.detail = []
            },
        [searchEventDetailThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.detail = payload
            },
        [searchEventDetailThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.detail = action.payload.message
            }
    },

});

export default ticketmasterEventSlice.reducer;