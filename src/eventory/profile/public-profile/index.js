import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfileThunk } from '../../../services/users-thunk';

import ProfileContentComponent from './profile-content';
import EditProfileComponent from './edit-profile';

const PublicProfileComponent = () => {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const currentUser = useSelector((state) => state.auth.currentUser);
    // const dispatch = useDispatch();

    // const updateUserHandler = async (updatedUser) => {
    //     await dispatch(updateUserProfileThunk({ userId: currentUser._id, updatedUser }));
    // };
    // console.log('Public profile: ------ ' + JSON.stringify(currentUser));

    return (
        <div>
            {isEditingProfile ? (
                <EditProfileComponent
                    setIsEditingProfile={setIsEditingProfile}
                    currentUser={currentUser}
                    // updateUserHandler={updateUserHandler}
                />
            ) : (
                <ProfileContentComponent
                    setIsEditingProfile={setIsEditingProfile}
                    currentUser={currentUser}
                    // updateUserHandler={updateUserHandler}
                />
            )}
        </div>
    );
};

export default PublicProfileComponent;
