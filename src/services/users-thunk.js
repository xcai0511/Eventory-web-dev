import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from './users-services';

export const updateUserProfileThunk = createAsyncThunk(
    'users/updateUser',
    async ({ userId, updatedUser }, { rejectWithValue }) => {
        try {
            const response = await service.updateUser(userId, updatedUser);
            console.log(response);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const resetUserPasswordThunk = createAsyncThunk(
    'users/resetUserPassword',
    async ({ oldPassword, newPassword }, { rejectWithValue }) => {
        try {
            const response = await service.resetUserPassword(oldPassword, newPassword);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const likeEventoryThunk = createAsyncThunk(
    'users/likeEventory',
    async ({eventId, action}, { rejectWithValue }) => {
        try {
            const response = await service.likeOrDislikeEventoryEvent(eventId, action);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)
