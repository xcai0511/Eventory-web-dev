import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import CreateEventForm from "../organizer-create-event";
import button from "bootstrap/js/src/button";
import OrganizerEventsList from "../organizer-event-card";
import {fetchEventsByOrganizerIdThunk} from "../../services/organizerEvent-thunks";
import {Link} from "react-router-dom";

const OrganizerDashboard = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);

    let organizerId = '';
    if (currentUser) {
        organizerId = currentUser._id;
    }

    useEffect(() => {
        dispatch(fetchEventsByOrganizerIdThunk(organizerId));
    }, [dispatch, organizerId]);

    return (
        <div className="container mt-4">
                <div className="row mb-3">
                    <div className="col text-end">
                        <Link to="/create-event" className="btn btn-primary d-none d-md-inline-block me-4 mt-3 mb-3">
                            Create Event
                            <i className="bi bi-plus-lg ms-2"></i>
                        </Link>
                        <Link to="/create-event" className="btn btn-primary d-sm-inline-block d-md-none me-4 mt-3 mb-3">
                            <i className="bi bi-plus-lg"></i>
                        </Link>
                    </div>
                    {organizerId && <OrganizerEventsList organizerId={organizerId}/>}

                </div>
        </div>
    );
};

export default OrganizerDashboard;