

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import "../public-user-profile/public-user-profile.css"
import EventCardComponent from "../../profile/user-favorites/fav-exclusive-card";
import TicketMasterCardComponent from "../../profile/user-favorites/fav-ticketmaster-card";
import React from "react";
import {eventIdThunk} from "../../../services/eventory-thunks";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const PublicOrganizerProfileComponent = ({ organizerProfile }) => {
    console.log("PublicOrganizerProfileComponent organizerProfile");
    console.log(organizerProfile);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const eventCardOnclickHandler = (eventId) => {
        const queryParams = new URLSearchParams({
            id: eventId,
        });
        console.log(`card on click ${eventId}`);
        dispatch(eventIdThunk(eventId));
        navigate(`/results/ev/detail/search?${queryParams.toString()}`);
    }


    if (!organizerProfile) {
        return (
            <div className="container">
                No organizer found.
            </div>
        )
    }
    return (
        <div className="container">
            <div className="mt-2">
                <div className="row mt-2">
                    {/*User Info Component*/}
                    <div className="col-12 col-lg-3 rounded-1 pb-3">
                        <div className="d-flex justify-content-center mt-3">
                            <img src="/images/organizer-avatar.png" alt="temp-avatar" className="rounded-pill public-user-profile-avatar me-3"/>
                        </div>
                        <div className="h4 fw-bold mt-3 justify-content-center d-flex">
                            {organizerProfile.name}
                        </div>
                        <div className="mt-1 border-top">
                            <div className="mt-2 row">
                                <div className="col-1">
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'envelope', style: 'solid' })}
                                    />
                                </div>
                                <div className="col-9">
                                    {/*<span className="fw-bold d-none d-xl-inline">Location: </span>*/}
                                    {organizerProfile.username ? (
                                        <span className="">{organizerProfile.username}</span>
                                    ) : (
                                        <span className="">unknown</span>
                                    )}
                                </div>
                            </div>
                            <div className="mt-2 row">
                                <div className="col-1">
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'circle-info', style: 'solid' })}
                                    />
                                </div>
                                <div className="col-8">
                                    {/*<span className="fw-bold d-none d-xl-block">Bio: </span>*/}
                                    {organizerProfile.bio ? (
                                        <span className="">{organizerProfile.bio}</span>
                                    ) : (
                                        <span className="">No Bio</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*User Favorite Event*/}
                    <div className="col-12 col-lg-8 mt-3">
                        {/* title */}
                        <div className="pb-1 mb-2">
                            <span className="h4 me-2 fw-bold">Events</span>
                        </div>
                        <div className="row">
                            {organizerProfile.events.map((event) => (
                                <div className="card mb-2" onClick={() => eventCardOnclickHandler(event._id)} >
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="card-img wd-poster" src="/images/eventory-exclusive-img.png" alt="poster" />
                                        </div>
                                        <div className="col-9 mt-1 mb-0">
                                            <div>
                                                <h4 className=" fw-bold card-title mb-1">{event?.name}</h4>
                                                <div className="mt-3">
                                                    <div className="mb-1">
                                                        <FontAwesomeIcon
                                                            icon={icon({ name: 'calendar-days', style: 'solid' })}
                                                            className="icon-15px"
                                                        />
                                                        <span className="fw-bold ms-1">Date: </span>
                                                        <span className="ms-1">{formatDate(event.date)}</span>
                                                    </div>
                                                    <div className="mb-1">
                                                        <FontAwesomeIcon
                                                            icon={icon({ name: 'location-dot', style: 'solid' })}
                                                            className="icon-15px"
                                                        />
                                                        <span className="fw-bold ms-1">Location: </span>
                                                        <span className="ms-1">
                                                            {event?.address} {event?.postalCode}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicOrganizerProfileComponent;