import React from "react";
import {useSelector} from "react-redux";
import {isCurrentUserRoleUser} from "../../utils/utils";
import "../index.css";

const UsersHomeLikedEvents = () => {

    const currentUser = useSelector((state) => state.auth.currentUser);
    isCurrentUserRoleUser(currentUser);

    return(
        <>
            <h3 className="fw-bold ms-2 mt-4 mb-3">Your Liked Events</h3>
            <div className="col-12 col-md-6 col-lg-4 col-xxl-3 p-2">
                <div className="card m-1">
                    <img className="card-img-top events-card-image" src="/images/eventory-exclusive-img.png"/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Event Name</h5>
                        <p className="card-subtitle mb-2 text-muted">January 20, 2024</p>
                        <h6 className="card-subtitle text-muted">Venue Name</h6>
                    </div>
                </div>
            </div>
        </>
    )
};

export default UsersHomeLikedEvents;