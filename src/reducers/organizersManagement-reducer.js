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
                console.log("getAllOrganizersThunk.pending");
                state.status = 'pending';
                state.error = null;
                state.data = null;
            })
            .addCase(getAllOrganizersThunk.fulfilled, (state, action) => {
                console.log("getAllOrganizersThunk.fulfilled");
                state.status = 'fulfilled';
                state.error = null
                state.data = action.payload.data;
            })
            .addCase(getAllOrganizersThunk.rejected, (state, action) => {
                console.log("getAllOrganizersThunk.rejected");
                state.status = 'rejected';
                state.error = action.payload;
                state.data = null;
                console.log(JSON.stringify(action));
            })
            .addCase(deleteOrganizerByIdThunk.pending, (state) => {
                console.log("deleteOrganizerByIdThunk.pending");
                state.status = 'pending';
                state.error = null;
            })
            .addCase(deleteOrganizerByIdThunk.fulfilled, (state, action ) => {
                console.log("deleteOrganizerByIdThunk.fulfilled");
                state.status = 'fulfilled';
                state.error = null;

            })
            .addCase(deleteOrganizerByIdThunk.rejected, (state, action) => {
                console.log("deleteOrganizerByIdThunk.rejected");
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
});

export default organizersManagementSlice.reducer;