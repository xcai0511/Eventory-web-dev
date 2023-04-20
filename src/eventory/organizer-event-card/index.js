import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    deleteEventByEventIdThunk,
    fetchEventByEventIdThunk,
    fetchEventsByOrganizerIdThunk
} from '../../services/organizerEvent-thunks';
import {Link, useNavigate} from "react-router-dom";

const OrganizerEventsList = ({ organizerId }) => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.events);
    const status = useSelector((state) => state.events.status);
    console.log("OrganizerEventsList");
    console.log(events);
    console.log(status);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("OrganizerEventsList" + organizerId);
        dispatch(fetchEventsByOrganizerIdThunk(organizerId));
    }, [dispatch, organizerId]);

    if (status === 'idle' || status === 'pending') {
        return <div>Loading...</div>;
    }

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const handleEditEvent = async (eventId) => {
        try {
            await dispatch(fetchEventByEventIdThunk(eventId));
        } catch (error) {
            alert(error.message);
        }
        navigate(`/edit-event/${eventId}`);
    };

    const handleViewAttendees = async (eventId) => {
        try {
            await dispatch(fetchEventByEventIdThunk(eventId));
        } catch (error) {
            alert(error.message);
        }
        await navigate(`/view-attendees/${eventId}`);
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await dispatch(deleteEventByEventIdThunk(eventId));
            await dispatch(fetchEventsByOrganizerIdThunk(organizerId));
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="row">
            {events.map((event) => (
                <div key={event._id} className="col-12 col-md-12 col-lg-6 col-xxl-4 p-2">
                    <div className="card m-1">
                        <img className="card-img-top events-card-image" src="/images/eventory-exclusive-img.png" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">
                                {event.name.length > 35
                                    ? `${event.name.substring(0, 35)}...`
                                    : event.name}
                            </h5>
                            <p className="card-subtitle mb-2 text-muted">{formatDate(event.date)}</p>
                            <h6 className="card-subtitle mb-2 text-muted">{event.address}</h6>
                            <p className="card-text">
                                {event.description.length > 45
                                    ? event.description.substring(0, 45) + "..."
                                    : event.description}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-primary" onClick={() => handleEditEvent(event._id)}>Edit Event</button>
                                <a href="#" className="btn btn-link text-decoration-none"
                                    onClick={() => handleViewAttendees(event._id, event.interestedUsers)}>View Attendees</a>
                                <a href="#" className="text-danger text-decoration-none"
                                    onClick={() => handleDeleteEvent(event._id)}>Delete Event</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrganizerEventsList;
