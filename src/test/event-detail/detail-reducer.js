import { createSlice } from "@reduxjs/toolkit";
import {searchEventDetailThunk} from "../../services/search-thunks";

const initialState = {
    result: [],
    loading: false
}

const detailSlice = createSlice({
    name: 'detail',
    initialState
});

export default detailSlice.reducer;