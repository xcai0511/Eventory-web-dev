import { createSlice } from '@reduxjs/toolkit';
import { userSignUpThunk } from '../services/auth-thunks';
import {
    updateUserProfileThunk,
    resetUserPasswordThunk,
    likeEventoryThunk,
    likeTicketmasterThunk
} from '../services/users-thunk';
// import { useDispatch } from 'react-redux';

const initialState = {
    error: null,
    userData: null,
    userStatus: 'idle',
};

const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(userSignUpThunk.pending, (state) => {
                    state.userStatus = 'pending';
                })
                .addCase(userSignUpThunk.fulfilled, (state, action) => {
                    state.userStatus = 'fulfilled';
                    state.userData = action.payload;
                })
                .addCase(userSignUpThunk.rejected, (state, action) => {
                    state.userStatus = 'rejected';
                    state.userData = action.payload;
                })
                .addCase(updateUserProfileThunk.pending, (state) => {
                    // add a new case for the new thunk
                    state.userStatus = 'updating';
                    console.log("updating user profile")
                })
                .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
                    // add a new case for the new thunk
                    state.userStatus = 'updated';
                    state.userData = action.payload;
                    console.log("updated user profile")
                })
                .addCase(updateUserProfileThunk.rejected, (state, action) => {
                    state.userStatus = 'rejected';
                    state.error = action.payload;
                    console.log("update user profile rejected")
                })
                .addCase(resetUserPasswordThunk.pending, (state) => {
                    state.userStatus = 'resetting';
                })
                .addCase(resetUserPasswordThunk.fulfilled, (state, action) => {
                    state.userStatus = 'updated';
                    state.userData = action.payload;
                })
                .addCase(resetUserPasswordThunk.rejected, (state, action) => {
                    state.userStatus = 'rejected';
                    state.error = action.payload;
                })
                .addCase(likeEventoryThunk.pending, (state) => {
                    state.userStatus = 'pending';
                    console.log("like eventory pending");
                })
                .addCase(likeEventoryThunk.fulfilled, (state, action) => {
                    state.userStatus = 'fulfilled';
                    state.userData = action.payload;
                    console.log("like eventory fulfilled");
                })
                .addCase(likeEventoryThunk.rejected, (state, action) => {
                    state.userStatus = 'rejected';
                    state.error = action.payload;
                    console.log("like eventory rejected");
                    console.log(state.error);
                })
                .addCase(likeTicketmasterThunk.pending, (state) => {
                    state.userStatus = 'pending';
                    console.log("like ticketmaster pending");
                })
                .addCase(likeTicketmasterThunk.fulfilled, (state, action) => {
                    state.userStatus = 'fulfilled';
                    state.userData = action.payload;
                    console.log("like ticketmaster fulfilled");
                })
                .addCase(likeTicketmasterThunk.rejected, (state, action) => {
                    state.userStatus = 'rejected';
                    state.error = action.payload;
                    console.log("like ticketmaster rejected");
                    console.log(state.error);
                });
        }
    }
);

export default userSlice.reducer;

    // extraReducers: (builder) => {
    //     builder
    //         .addCase(userSignUpThunk.pending, (state) => {
    //             state.userStatus = 'pending';
    //         })
    //         .addCase(userSignUpThunk.fulfilled, (state, action) => {
    //             state.userStatus = 'fulfilled';
    //             state.userData = action.payload;
    //         })
    //         .addCase(userSignUpThunk.rejected, (state, action) => {
    //             state.userStatus = 'rejected';
    //             state.userData = action.payload;
    //         })
    //         .addCase(updateUserProfileThunk.pending, (state) => {
    //             // add a new case for the new thunk
    //             state.userStatus = 'updating';
    //             console.log("updating user profile")
    //         })
    //         .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
    //             // add a new case for the new thunk
    //             state.userStatus = 'updated';
    //             state.userData = action.payload;
    //             console.log("updated user profile")
    //         })
    //         .addCase(updateUserProfileThunk.rejected, (state, action) => {
    //             state.userStatus = 'rejected';
    //             state.error = action.payload;
    //             console.log("update user profile rejected")
    //         })
    //         .addCase(resetUserPasswordThunk.pending, (state) => {
    //             state.userStatus = 'resetting';
    //         })
    //         .addCase(resetUserPasswordThunk.fulfilled, (state, action) => {
    //             state.userStatus = 'updated';
    //             state.userData = action.payload;
    //         })
    //         .addCase(resetUserPasswordThunk.rejected, (state, action) => {
    //             state.userStatus = 'rejected';
    //             state.error = action.payload;
    //         })
    //         .addCase(likeEventoryThunk.pending, (state) => {
    //             state.userStatus = 'pending';
    //             console.log("like eventory pending");
    //         })
    //         .addCase(likeEventoryThunk.fulfilled, (state, action) => {
    //             state.userStatus = 'fulfilled';
    //             state.userData = action.payload;
    //             console.log("like eventory fulfilled");
    //         })
    //         .addCase(likeEventoryThunk.rejected, (state, action) => {
    //             state.userStatus = 'rejected';
    //             state.error = action.payload;
    //             console.log("like eventory rejected");
    //             console.log(state.error);
    //         })
    //         .addCase(likeTicketmasterThunk.pending, (state) => {
    //             state.userStatus = 'pending';
    //             console.log("like ticketmaster pending");
    //         })
    //         .addCase(likeTicketmasterThunk.fulfilled, (state, action) => {
    //             state.userStatus = 'fulfilled';
    //             state.userData = action.payload;
    //             console.log("like ticketmaster fulfilled");
    //         })
    //         .addCase(likeTicketmasterThunk.rejected, (state, action) => {
    //             state.userStatus = 'rejected';
    //             state.error = action.payload;
    //             console.log("like ticketmaster rejected");
    //             console.log(state.error);
    //         });
//     },
// });
