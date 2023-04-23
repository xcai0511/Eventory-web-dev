import {createSlice} from "@reduxjs/toolkit";
import {deleteUserByIdThunk, getAllUsersThunk} from "../services/usersManagement-thunks";

const initialState = {
    status : 'idle',
    error: null,
    data : null,
};

const usersManagementSlice = createSlice({
    name: 'usersManagement',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsersThunk.pending, (state) => {
                state.status = 'pending';
                state.error = null;
                state.data = null;
            })
            .addCase(getAllUsersThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null
                state.data = action.payload.data;
            })
            .addCase(getAllUsersThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
                state.data = null;
            })
            .addCase(deleteUserByIdThunk.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(deleteUserByIdThunk.fulfilled, (state, action ) => {
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(deleteUserByIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
});

export default usersManagementSlice.reducer;