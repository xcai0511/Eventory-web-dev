import { createSlice } from "@reduxjs/toolkit";
import { userSignUpThunk } from "../../services/users-thunks";

const initialState = {
    user: null,
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [userSignUpThunk.pending]:
            (state) => {
                state.loading = true;
            },
        [userSignUpThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.user = payload;
            },
        [userSignUpThunk.rejected]:
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
    }
});

export default userSlice.reducer;