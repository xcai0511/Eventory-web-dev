import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./search-service"

export const searchThunk = createAsyncThunk(
    'search/results', async ({rejectWithValue}) => {
        try {
            const findResult = await service.findEventsInMa();
            return findResult;
        } catch (e) {
            if (!e.response) {
                return rejectWithValue('Something went wrong');
            }
        }
    }

)

export const searchFilterThunk = createAsyncThunk(
    'search/searchFilter', async ({location, keyword}, {rejectWithValue}) => {
        try {
            const findResult = await service.findEventsByFilter(location, keyword);
            return findResult;
        } catch (e) {
            if (!e.response) {
                return rejectWithValue('Something went wrong');
            }
        }
    }

)