import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {profileThunk} from "../../../services/auth-thunks";
import PublicUserProfileComponent from "./public-user-profile-component";

const PublicUserProfile = () => {
    // const currentUser = useSelector((state) => state.auth.currentUser);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();

    // keep track of Profile Thunk
    useEffect(() => {
        dispatch(profileThunk());
    }, [currentUser, dispatch]);

    return (
        <>
            <PublicUserProfileComponent currentUser={currentUser}/>
        </>
    );
};

export default PublicUserProfile;