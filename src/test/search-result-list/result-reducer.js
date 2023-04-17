import { createSlice } from "@reduxjs/toolkit";
import {searchEventDetailThunk, searchFilterThunk, searchThunk} from "../../services/search-thunks";

const initialState = {
    result: [],
    loading: false
}

const resultSlice = createSlice({
    name: "result",
    initialState,
    extraReducers: {
        [searchThunk.pending]:
            (state) => {
                state.loading = true
                state.result = []
            },
        [searchThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.result = payload
            },
        [searchThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.result = action.error
            },
        [searchFilterThunk.pending]:
            (state) => {
                state.loading = true
                state.result = []
            },
        [searchFilterThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.result = payload
            },
        [searchFilterThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.result = action.error
            },
        [searchEventDetailThunk.pending]:
            (state) => {
                state.loading = true
                state.result = []
            },
        [searchEventDetailThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.result = payload
            },
        [searchEventDetailThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.result = action.error
            }
    },

});

export default resultSlice.reducer;