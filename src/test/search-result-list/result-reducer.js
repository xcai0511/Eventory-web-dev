import { createSlice } from "@reduxjs/toolkit";
import resultArray from "./result.json";

const resultSlice = createSlice({
    name: "result",
    initialState: resultArray
});

export default resultSlice.reducer;