import { findOrganizerByIdThunk, findUserByIdThunk } from '../services/anonymous-thunks';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle',
    message: null,
    data: null,
};

const anonymousSlice = createSlice({
    name: 'anonymous',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(findUserByIdThunk.pending, (state) => {
                console.log('findUserByIdThunk.pending');
                state.status = 'pending';
                state.message = null;
                // state.data = null;
            })
            .addCase(findUserByIdThunk.fulfilled, (state, action) => {
                console.log('findUserByIdThunk.fulfilled');
                state.status = 'fulfilled';
                state.message = null;
                state.data = action.payload.data;
                console.log(
                    'findUserByIdThunk: ----' + JSON.stringify(action.payload.data)
                );
            })
            .addCase(findUserByIdThunk.rejected, (state, action) => {
                console.log('findUserByIdThunk.rejected');
                state.status = 'rejected';
                state.message = action.payload;
                state.data = null;
            })
            .addCase(findOrganizerByIdThunk.pending, (state) => {
                console.log('findOrganizerByIdThunk.pending');
                state.status = 'pending';
                state.message = null;
                state.data = null;
            })
            .addCase(findOrganizerByIdThunk.fulfilled, (state, action) => {
                console.log('findOrganizerByIdThunk.fulfilled');
                state.status = 'fulfilled';
                state.message = null;
                state.data = action.payload.data;
            })
            .addCase(findOrganizerByIdThunk.rejected, (state, action) => {
                console.log('findOrganizerByIdThunk.rejected');
                state.status = 'rejected';
                state.message = action.payload;
                state.data = null;
            });
    },
});
export default anonymousSlice.reducer;
