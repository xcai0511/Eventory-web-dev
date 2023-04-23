import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./usersManagement-service";

export const getAllUsersThunk = createAsyncThunk(
    "admin/usersManagement/getAllUsers",
    async () => {
        const getAllUsersResult = await service.getAllUsers();
        return getAllUsersResult;
    }
);

export const deleteUserByIdThunk = createAsyncThunk(
    "admin/usersManagement/deleteUser",
    async (userId, { rejectWithValue }) => {
        try {
            const deleteUserResult = await service.deleteUserById(userId);
            return deleteUserResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);