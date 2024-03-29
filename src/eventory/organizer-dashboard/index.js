import React, {useEffect} from "react";
import { useDispatch } from 'react-redux';
import OrganizerEventsList from "../organizer-event-card";
import {fetchEventsByOrganizerIdThunk} from "../../services/organizerEvent-thunks";
import {Link} from "react-router-dom";
import "./index.css"
import OrganizerProfileDetails from "./organizer-profile-details";
import Footer from "../footer";

const OrganizerDashboard = () => {

    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    let organizerId = '';
    if (currentUser) {
        organizerId = currentUser._id;
    }

    useEffect(() => {
        dispatch(fetchEventsByOrganizerIdThunk(organizerId));
    }, [dispatch, organizerId]);

    if (currentUser) {
        return (
            <>
                <div className="container mt-4">
                    {(currentUser.role !== "organizer") ? <h3 className="mt-4 ms-4">Unauthorized.</h3> :
                        <div>
                            <h4 className="mb-4">Welcome, {currentUser.name}!</h4>
                            <h5>Your Profile Information</h5>

                            <OrganizerProfileDetails/>

                            <hr/>

                            <div className="row mb-3">
                                <div className="col text-end">
                                    <Link to="/create-event"
                                          className="btn btn-primary d-none d-md-inline-block me-4 mt-3 mb-3">
                                        Create Event
                                        <i className="bi bi-plus-lg ms-2"></i>
                                    </Link>
                                    <Link to="/create-event"
                                          className="btn btn-primary d-sm-inline-block d-md-none me-4 mt-3 mb-3">
                                        <i className="bi bi-plus-lg"></i>
                                    </Link>
                                </div>
                                {organizerId && <OrganizerEventsList organizerId={organizerId}/>}
                            </div>
                        </div>
                    }
                </div>
                <Footer/>
            </>
        );
    }
};

export default OrganizerDashboard;