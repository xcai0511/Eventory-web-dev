import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./organizersManagement-service";

export const getAllOrganizersThunk = createAsyncThunk(
    "admin/organizersManagement/getAllOrganizers",
    async () => {
        const getAllOrganizersResult = await service.getAllOrganizers();
        return getAllOrganizersResult;
    }
);

export const deleteOrganizerByIdThunk = createAsyncThunk(
    "admin/organizersManagement/deleteOrganizer",
    async (organizerId, { rejectWithValue }) => {
        try {
            const deleteOrganizerResult = await service.deleteOrganizerById(organizerId)
            return deleteOrganizerResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);