import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./search-service"

export const searchThunk = createAsyncThunk(
    'search/results', async ({ rejectWithValue }) => {
        try {
            const findResult = await service.findEventsInMa();
            return findResult;
        } catch (e) {
            if (!e.response) {
                return rejectWithValue('Something went wrong');
            }
            return rejectWithValue(e.response.data);
        }
    }

)

export const searchFilterThunk = createAsyncThunk(
    'search/searchFilter', async ({location, keyword}, { rejectWithValue }) => {
        try {
            const findResult = await service.findEventsByFilter(location, keyword);
            return findResult;
        } catch (e) {
            if (!e.response) {
                return rejectWithValue('Something went wrong');
            }
            return rejectWithValue(e.response.data);
        }
    }

)

export const searchEventDetailThunk = createAsyncThunk(
    'search/results/detail', async ({e_id},{ rejectWithValue }) => {
        try {
            const result = await service.getTicketmasterEventDetails(e_id);
            return result;
        } catch (e) {
            if (!e.response) {
                return rejectWithValue('Something went wrong');
            }
            return rejectWithValue(e.response.data);
        }
    }

)