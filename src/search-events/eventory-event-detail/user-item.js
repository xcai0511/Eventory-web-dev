import React from "react";

const UserItem = ({user}) => {
    return(
        <div>
            <i className="bi bi-person me-3"></i>
            {user.firstName} {user.lastName}
        </div>
    );
};
export default UserItem;