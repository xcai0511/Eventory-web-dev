import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./event-service"

export const eventThunk = createAsyncThunk(
    'search/results', async () =>
        await service.findAllEvents()
)