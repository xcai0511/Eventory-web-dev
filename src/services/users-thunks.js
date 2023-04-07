import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./users-service";

export const userSignUpThunk =  createAsyncThunk(
    'users/signup',
    async (user, { rejectWithValue }) => {
        try {
            const signUpResult = await service.userSignUp(user);
            return signUpResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        };
    }
);

export const userSignInThunk = createAsyncThunk(
    'users/signin',
    async (user, { rejectWithValue }) => {
        try {
            const signInResult = await service.userSignIn(user);
            return signInResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        };
    }
);
