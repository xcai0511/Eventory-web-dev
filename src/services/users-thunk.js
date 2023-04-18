import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from './users-services';

export const updateUserProfileThunk = createAsyncThunk(
    'users/updateUser',
    async ({ userId, updatedUser }) => {
        const result = await service.updateUser(userId, updatedUser);
        return result.data; // return the updated user data
    }
);
