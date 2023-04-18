import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from './users-services';

export const updateUserProfileThunk = createAsyncThunk(
    'users/updateUser',
    async ({ userId, updatedUser }) => {
        const result = await service.updateUser(userId, updatedUser);
        // console.log('here is the result: ----' + result); // add this line to log the result
        return updatedUser;
    }
);
