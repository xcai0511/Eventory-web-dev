import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./organizers-service";

export const updateOrganizerByOrganizerIdThunk = createAsyncThunk(
    'organizers/updateOrganizer',
    async ({ organizerId, updatedOrganizer }, { rejectWithValue }) => {
        try {
            const response = await service.updateOrganizerByOrganizerId(organizerId, updatedOrganizer);
            console.log(response);
            return response;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue("Something went wrong.");
            }
            return rejectWithValue(error.response.data);
        }
    }
);