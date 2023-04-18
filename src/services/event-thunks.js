import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./event-service"

export const eventThunk = createAsyncThunk(
    'eventory/search/results', async () =>
        await service.findAllEvents()
)

export const eventFilterThunk = createAsyncThunk(
    'eventory/search/searchFilter', async ({city, keyword}, { rejectWithValue }) => {
        try {
            const findResult = await service.findEvents(city, keyword);
            return findResult;
        } catch (e) {
            if (!e.response) {
                return rejectWithValue('Something went wrong');
            }
            return rejectWithValue(e.response.data);
        }
    }
)