import React from "react";
import LikedUserRandomAvatar from "../avatar-images/random-avatar";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {findUserByIdThunk} from "../../services/anonymous-thunks";
import "./detail.css"

const UserItem = ({user}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userOnclickHandler = async () => {
        const queryParams = new URLSearchParams({
            id: user._id,
        });
        await dispatch(findUserByIdThunk(user._id));
        navigate(`/public-profile/user/search?${queryParams.toString()}`);
    }
    return(
        <div className="mt-1 p-2 event-detail-hover" onClick={userOnclickHandler} style={{cursor: "pointer"}}>
            <LikedUserRandomAvatar/>
            {user.firstName} {user.lastName}
        </div>
    );
};

export default UserItem;