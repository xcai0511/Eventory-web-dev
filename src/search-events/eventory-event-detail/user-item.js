import React from "react";
// import avatar1 from '../avatar-images/user-avatar-1.png';
// import avatar2 from '../avatar-images/user-avatar-2.png';
// import avatar3 from '../avatar-images/user-avatar-3.png';
// import avatar4 from '../avatar-images/user-avatar-4.png';
// import avatar5 from '../avatar-images/user-avatar-5.png';
// import avatar6 from '../avatar-images/user-avatar-6.png';
// import avatar7 from '../avatar-images/user-avatar-7.png';
// import avatar8 from '../avatar-images/user-avatar-8.png';
import RandomAvatar from "../avatar-images/random-avatar";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {findUserByIdThunk} from "../../services/anonymous-thunks";

const UserItem = ({user}) => {
    // const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8];
    // const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userOnclickHandler = async () => {
        const queryParams = new URLSearchParams({
            id: user._id,
        });
        console.log("onClick " + user._id);
        await dispatch(findUserByIdThunk(user._id));
        navigate(`/public-profile/user/search?${queryParams.toString()}`);
    }
    return(
        <div className="mt-1" onClick={userOnclickHandler} style={{cursor: "pointer"}}>
            {/*<img src={randomAvatar} alt="avatar" className="wd-random-avatar me-3"/>*/}
            <RandomAvatar/>
            {/*<i className="bi bi-person me-3"></i>*/}
            {user.firstName} {user.lastName}
        </div>
    );
};
export default UserItem;