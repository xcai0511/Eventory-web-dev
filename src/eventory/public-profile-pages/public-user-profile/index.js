import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicUserProfileComponent from './public-user-profile-component';
import { useLocation } from 'react-router';
import { findUserByIdThunk } from '../../../services/anonymous-thunks';

const PublicUserProfile = () => {
    // const currentUser = useSelector((state) => state.auth.currentUser);
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
    const data = useSelector((state) => state.anonymous?.data);
    console.log('---- the state.anonymous.data' + data);
    const [isLoading, setIsLoading] = useState(true);

    const link = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(link.search);
        const userId = queryParams.get('id');
        console.log('user id for public user profile ' + userId);
        const findUser = async () => {
            setIsLoading(true);
            await dispatch(findUserByIdThunk(userId));
            setIsLoading(false);
        };
        findUser();
        console.log('public user profile');
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{data && <PublicUserProfileComponent userProfile={data} />}</>;
};

export default PublicUserProfile;
