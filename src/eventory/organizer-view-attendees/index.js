import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {useState} from "react";

const ViewAttendeesList = () => {
    let eventData = useSelector(state => state.event.event);
    let eventStatus = useSelector(state => state.event.status);
    let eventError = useSelector(state => state.event.error);
    console.log("ViewAttendeesList: " + JSON.stringify(eventData));
    const interestedUsers = eventData.interestedUsers;
    const numAttendees = interestedUsers.length;
    console.log("interestedUsers");
    console.log(interestedUsers);
    return (
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
    );
};

export default ViewAttendeesList;

