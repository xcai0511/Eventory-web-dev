import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PublicUserProfileComponent from "./public-user-profile-component";
import {useLocation} from "react-router";
import {findUserByIdThunk} from "../../../services/anonymous-thunks";

const PublicUserProfile = () => {
    // const currentUser = useSelector((state) => state.auth.currentUser);
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
    const data = useSelector((state) => state.anonymous.data);
    console.log(data);

    const link = useLocation();



    useEffect(() => {
        const queryParams = new URLSearchParams(link.search);
        const userId = queryParams.get("id");
        console.log("user id for public user profile " + userId);
        dispatch(findUserByIdThunk(userId));
        console.log("public user profile")
    }, []);



    return (
        <>
            <PublicUserProfileComponent userProfile={data}/>
        </>
    );
};

export default PublicUserProfile;