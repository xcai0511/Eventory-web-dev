import * as service from "./anonymous-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const findUserByIdThunk = createAsyncThunk(
    'anonymous/findUserById',
    async (userId,{rejectWithValue}) => {
        try {
            console.log("findUserByIdThunk " + userId);
            const findUserResult = await service.findUserById(userId);
            console.log(JSON.stringify(findUserResult));
            return findUserResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
        // console.log("findUserByIdThunk " + userId);
        // const findUserResult = await service.findUserById(userId);
        // console.log(JSON.stringify(findUserResult));
        // return findUserResult;
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