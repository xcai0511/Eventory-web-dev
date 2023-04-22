import React from "react";
import avatar1 from './user-avatar-1.png';
import avatar2 from './user-avatar-2.png';
import avatar3 from './user-avatar-3.png';
import avatar4 from './user-avatar-4.png';
import avatar5 from './user-avatar-5.png';
import avatar6 from './user-avatar-6.png';
import avatar7 from './user-avatar-7.png';
import avatar8 from './user-avatar-8.png';
import "../eventory-event-detail/detail.css";

const LikedUserRandomAvatar = () => {
    const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    return (
        <img src={randomAvatar} alt="avatar" className="wd-random-avatar me-3"/>
    );
};

export default LikedUserRandomAvatar;