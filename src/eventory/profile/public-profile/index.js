import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProfileContentComponent from './profile-content';
import EditProfileComponent from './edit-profile';
import { profileThunk } from '../../../services/auth-thunks';

const PublicProfileComponent = () => {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    // const currentUser = useSelector((state) => state.auth.currentUser);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();

    // keep track of Profile Thunk
    useEffect(() => {
        dispatch(profileThunk());
    }, [currentUser, dispatch]);

    return (
        <div>
            {isEditingProfile ? (
                <EditProfileComponent
                    setIsEditingProfile={setIsEditingProfile}
                    currentUser={currentUser}
                />
            ) : (
                <ProfileContentComponent
                    setIsEditingProfile={setIsEditingProfile}
                    currentUser={currentUser}
                />
            )}
        </div>
    );
};

export default PublicProfileComponent;
