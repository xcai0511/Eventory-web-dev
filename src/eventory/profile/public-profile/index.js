import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ProfileContentComponent from './profile-content';
import EditProfileComponent from './edit-profile';

const PublicProfileComponent = () => {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const currentUser = useSelector((state) => state.auth.currentUser);

    console.log('Public profile: ------ ' + JSON.stringify(currentUser));

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
