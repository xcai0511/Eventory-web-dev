import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./createEvent-service";

export const createEventThunk = createAsyncThunk(
    "events/createEvent",
    async (event, { rejectWithValue }) => {
        try {
            const createEventResult = await service.createEvent(event);
            return createEventResult.data;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);