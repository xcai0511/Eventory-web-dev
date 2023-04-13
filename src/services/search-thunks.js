import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./search-service"

export const searchThunk = createAsyncThunk(
    'search/results', async () =>
        await service.findEventsInMa()
)

export const searchFilterThunk = createAsyncThunk(
    'search/searchFilter', async ({location, keyword}) =>
        await service.findEventsByFilter(location, keyword)
)