import {createSlice} from "@reduxjs/toolkit";
import {deleteOrganizerByIdThunk, getAllOrganizersThunk} from "../services/organizersManagement-thunks";

const initialState = {
    status : 'idle',
    error: null,
    data : null,
};

const organizersManagementSlice = createSlice({
    name: 'organizersManagement',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrganizersThunk.pending, (state) => {
                state.status = 'pending';
                state.error = null;
                state.data = null;
            })
            .addCase(getAllOrganizersThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.error = null
                state.data = action.payload.data;
            })
            .addCase(getAllOrganizersThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
                state.data = null;
            })
            .addCase(deleteOrganizerByIdThunk.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(deleteOrganizerByIdThunk.fulfilled, (state, action ) => {
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(deleteOrganizerByIdThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
});

export default organizersManagementSlice.reducer;