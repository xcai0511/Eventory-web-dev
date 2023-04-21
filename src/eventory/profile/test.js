import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    updateUserProfileThunk,
    resetUserPasswordThunk,
} from '../../services/users-thunk';

const UserProfile = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const handleUpdateProfile = (updates) => {
        dispatch(
            updateUserProfileThunk({ userId: currentUser._id, updatedUser: updates })
        );
    };

    const handleResetPassword = () => {
        dispatch(resetUserPasswordThunk(oldPassword, newPassword));
        setOldPassword('');
        setNewPassword('');
    };

    return (
        <div>
            <h2>User Profile</h2>
            <p>firstName: {currentUser.firstName} </p>
            <p>lastName: {currentUser.lastName} </p>
            <h3>Update Profile</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdateProfile({
                        firstName: e.target.firstName.value,
                        lastName: e.target.lastName.value,
                    });
                }}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="name" defaultValue={currentUser.firstName} />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="name" defaultValue={currentUser.lastName} />
                <button type="submit">Update Profile</button>
            </form>
            <h3>Reset Password</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleResetPassword();
                }}>
                <label htmlFor="oldPassword">Old Password:</label>
                <input
                    type="password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <label htmlFor="newPassword">New Password:</label>
                <input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default UserProfile;
