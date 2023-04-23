import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicUserProfileComponent from './public-user-profile-component';
import { useLocation } from 'react-router';
import { findUserByIdThunk } from '../../../services/anonymous-thunks';

const PublicUserProfile = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.anonymous?.data);
    const [isLoading, setIsLoading] = useState(true);

    const link = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(link.search);
        const userId = queryParams.get('id');
        const findUser = async () => {
            setIsLoading(true);
            await dispatch(findUserByIdThunk(userId));
            setIsLoading(false);
        };
        findUser();
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{data && <PublicUserProfileComponent userProfile={data} />}</>;
};

export default PublicUserProfile;
