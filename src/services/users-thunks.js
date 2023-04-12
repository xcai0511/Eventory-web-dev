import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./users-service";

export const userSignUpThunk =  createAsyncThunk(
    'users/signup',
    async (user, { rejectWithValue }) => {
        try {
            console.log("here");
            const signUpResult = await service.userSignUp(user);
            console.log(signUpResult);
            return signUpResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        };
    }
);

export const signInThunk = createAsyncThunk(
    'everybody/signin',
    async (user, { rejectWithValue }) => {
        try {
            const signInResult = await service.everybodySignIn(user);
            return signInResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        };
    }
);
