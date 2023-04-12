import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./search-service"
import {create} from "axios";

export const searchThunk = createAsyncThunk(
    'search/results', async () =>
        await service.findEventsInMa()
)