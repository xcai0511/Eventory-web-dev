import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {fetchEventByEventIdThunk} from "../../services/organizerEvent-thunks";

const ViewAttendeesList = () => {

    const currentUser = useSelector((state) => state.auth.currentUser);

    let eventData = useSelector(state => state.organizersEvent.event);
    let eventStatus = useSelector(state => state.organizersEvent.status);
    let eventError = useSelector(state => state.organizersEvent.error);

    const dispatch = useDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        const paths = pathname.split('/');
        const eventId = (paths[2]) ? paths[2] : '';
        dispatch(fetchEventByEventIdThunk(eventId))
    }, [])

    const interestedUsers = eventData?.interestedUsers ?? [];
    const numAttendees = interestedUsers.length;

    return (
        <div>
            {(currentUser.role !== "organizer") ? <h3 className="mt-4 ms-4">Unauthorized.</h3> :
            <div className="container mt-4">
                <div>
                    <h1>View Attendees</h1>
                    <p>{numAttendees} attendee{numAttendees !== 1 ? 's' : ''}</p>
                    {interestedUsers && interestedUsers.length > 0 ? (
                        <ul className="list-group">
                            {interestedUsers.map((user) => (
                                <li key={user._id} className="list-group-item">
                                    <i className="bi bi-person me-3"></i>
                                    {user.firstName} {user.lastName}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No attendees found.</p>
                    )}
                </div>
            </div>
            }
        </div>
    );
};

export default ViewAttendeesList;

