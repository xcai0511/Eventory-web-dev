import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./eventory-service"

export const eventThunk = createAsyncThunk(
    'eventory/search/results', async () =>
        await service.findAllEvents()
)

export const eventFilterThunk = createAsyncThunk(
    'eventory/search/searchFilter', async ({location, keyword}, { rejectWithValue }) => {
        try {
            const findResult = await service.findEvents(location, keyword);
            return findResult;
        } catch (e) {
            if (!e.response) {
                return rejectWithValue('Something went wrong');
            }
            return rejectWithValue(e.response.data);
        }
    }
)

export const eventIdThunk = createAsyncThunk(
    'eventory/search/id', async ({eventId}, { rejectWithValue }) => {
        try {
            console.log(`event id thunk: ${eventId}`);
            const findResult = await service.findEventById(eventId);
            return findResult;
        } catch (e) {
            if (!e.response) {
                return rejectWithValue('Something went wrong');
            }
            return rejectWithValue(e.response.data);
        }
    }
)