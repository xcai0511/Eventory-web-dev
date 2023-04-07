import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./users-service";

export const userSignUpThunk =  createAsyncThunk(
    'users/signup',
    async (user, { rejectWithValue }) => {
        try {
            const newUser = await service.userSignUp(user);
            return newUser;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
