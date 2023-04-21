import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from './auth-service';

export const userSignUpThunk = createAsyncThunk(
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
        }
    }
);

export const organizerSignUpThunk = createAsyncThunk(
    'organizers/signup',
    async (organizer, { rejectWithValue }) => {
        try {
            const organizerSignUpResult = await service.organizerSignUp(organizer);
            return organizerSignUpResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
)

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
        }
    }
);

export const logOutThunk = createAsyncThunk(
    'everybody/logout',
    async () => {
        const logOutResult = await service.everybodyLogOut();
        return logOutResult;
    }
);

export const profileThunk = createAsyncThunk(
    'everybody/profile',
    async ({ rejectWithValue }) => {
        try {
            const profileResult = await service.currentUserProfile();
            return profileResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);
