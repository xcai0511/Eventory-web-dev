import * as service from "./anonymous-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const findUserByIdThunk = createAsyncThunk(
    'anonymous/findUserById',
    async (userId,{rejectWithValue}) => {
        try {
            const findUserResult = await service.findUserById(userId);
            return findUserResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);

export const findOrganizerByIdThunk = createAsyncThunk(
    'anonymous/findOrganizerById',
    async (organizerId, {rejectWithValue}) => {
        try {
            const findOrganizerResult = await service.findOrganizerById(organizerId);
            return findOrganizerResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);