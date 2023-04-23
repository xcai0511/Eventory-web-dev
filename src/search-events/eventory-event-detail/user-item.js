import React from "react";
import LikedUserRandomAvatar from "../avatar-images/random-avatar";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {findUserByIdThunk} from "../../services/anonymous-thunks";
import "./detail.css"

const UserItem = ({user}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("UserItem " + JSON.stringify(user));
    const userOnclickHandler = async () => {
        const queryParams = new URLSearchParams({
            id: user._id,
        });
        console.log("onClick " + user._id);
        await dispatch(findUserByIdThunk(user._id));
        navigate(`/public-profile/user/search?${queryParams.toString()}`);
    }
    return(

        // <div className="mb-0 p-2 event-detail-hover" onClick={userOnclickHandler} style={{cursor: "pointer"}}>
        //     <img src={randomAvatar} alt="avatar" className="wd-random-avatar me-3"/>

        <div className="mt-1 p-2 event-detail-hover" onClick={userOnclickHandler} style={{cursor: "pointer"}}>
            {/*<img src={randomAvatar} alt="avatar" className="wd-random-avatar me-3"/>*/}
            <LikedUserRandomAvatar/>
            {/*<i className="bi bi-person me-3"></i>*/}
            {user.firstName} {user.lastName}
        </div>
    );
};
export default UserItem;