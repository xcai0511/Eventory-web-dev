import { createSlice } from "@reduxjs/toolkit";
import detailArray from './detail.json';

const detailSlice = createSlice({
    name: 'detail',
    initialState: detailArray
});

export default detailSlice.reducer;