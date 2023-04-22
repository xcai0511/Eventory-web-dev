import React, {useEffect, useState} from "react";
import "./detail.css";
import "../ticketmaster-event-detail/detail.css";
import {likeEventoryThunk} from "../../services/users-thunk";
import {useDispatch} from "react-redux";
import UserItem from "./user-item";
import {profileThunk} from "../../services/auth-thunks";
import {eventIdThunk} from "../../services/eventory-thunks";
import {findOrganizerByIdThunk} from "../../services/anonymous-thunks";
import {useNavigate} from "react-router";
import Footer from "../../eventory/footer";

const EventoryDetailItem = ({detail}) => {
    // interested button
    const [interested, setInterested] = useState(false);
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {

    }
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const likeEvents = currentUser.likedEvents;
            setInterested(likeEvents.includes(detail._id));
        }
    }, []);

    // const eventTime = new Date(detail.time);
    // const estD = new Date(eventTime.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    // const estTime = estD.toLocaleString('en-US', { timeZone: 'America/New_York', minute: '2-digit', second: '2-digit' });

    const eventTime = new Date(detail?.time).toLocaleTimeString('en-US', {
        timeZone: 'America/New_York', hour12: false, });
    const eventTimeDisplay = eventTime?.split(":");
    let localTime;
    if (eventTimeDisplay) {
        localTime = eventTimeDisplay[0] + ":" + eventTimeDisplay[1]
    }

    const eventDate = new Date(detail.date);
    const estDate = eventDate.toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

    // let intUser = detail.interestedUsers;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const likeButtonOnclickHandler = async (e) => {
        e.stopPropagation();
        let action;
        if (interested) {
            action = 'dislike';
        } else {
            action = 'like';
        }
        const { payload: { message } = {} } = await dispatch(likeEventoryThunk({eventId: detail._id, action: action}));
        console.log(message);
        if (message === "Unauthorized.") {
            alert("Please log in or sign up to like an event!");
        } else {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            let newLikeEvents = [];
            if (interested) {
                newLikeEvents = currentUser.likedEvents.filter(id => id !== detail._id);
            } else {
                newLikeEvents = currentUser.likedEvents.concat(detail._id);
            }
            currentUser.likedEvents = newLikeEvents;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            setInterested(!interested);
        }
    };

    const organizerPublicProfileOnClickHandler = async () => {
        const queryParams = new URLSearchParams({
            id: detail.organizer._id,
        });
        console.log("eventory-detail-item organizerPublicProfileOnClickHandler");
        await dispatch(findOrganizerByIdThunk(detail.organizer._id));
        navigate(`/public-profile/organizer/search?${queryParams.toString()}`);
    }

    return(

        <>
        <div className="wd-detail-page mt-3 mb-4">
            <div className="wd-poster-container">
                <img className="wd-poster-frame" src="/images/eventory-exclusive-img.png"/>
                <img className="wd-poster-img" src="/images/eventory-exclusive-img.png"/>
            </div>
            <div className="mt-3 mb-2">
                <div className="float-end">
                    <button className="btn btn-light" onClick={likeButtonOnclickHandler}>
                        {
                            interested ? (
                                <>
                                    <div className="d-inline me-2">
                                        Liked
                                    </div>
                                    <i className="d-inline bi bi-heart-fill wd-like"></i>
                                </>) : (
                                <>
                                    <div className="d-inline me-2">
                                        Like
                                    </div>
                                    <i className="d-inline bi bi-heart"></i>
                                </>
                            )
                        }
                    </button>
                </div>
                <div className="btn btn-warning d-inline">Exclusive Event</div>
            </div>
            <div className="row mt-3">
                <div className="">
                    <h1 className="fw-bold">{detail.name}</h1>
                    <h4 className="fw-bold mt-3">When and Where</h4>
                    <div className="row mt-3">
                        <div className="col-2 mt-2">
                            <i className="wd-icon bi bi-calendar-heart"></i>
                        </div>
                        <div className="col-10 mt-0">
                            <div className="fw-bold">Date and Time</div>
                            <div>{estDate} {localTime} EST</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-2 mt-2">
                            <i className="wd-icon bi bi-geo-alt"></i>
                        </div>
                        <div className="col-10 mt-0">
                            <div className="fw-bold">Location</div>
                            <div>{detail.address}, {detail.city} {detail.postalCode}</div>
                        </div>
                    </div>
                    {
                        detail.organizer ? (
                            <div className="mt-3" onClick={organizerPublicProfileOnClickHandler}>
                                <h4 className="fw-bold">Organizer</h4>
                                <div className="border rounded wd-organier event-detail-hover" style={{cursor:"pointer"}}>
                                    <div>{detail.organizer.name}</div>
                                </div>
                            </div>
                        ) : null
                    }

                    <h4 className="fw-bold mt-4">Description</h4>
                    <div>{detail.description}</div>

                    {
                        detail.interestedUsers ? (
                            <div className="mt-3">
                                <h4 className="fw-bold list-group-item">Liked Users</h4>
                                <ul className="list-group wd-liked-user-list">
                                    <li className="list-group-item event-detail-hover">
                                        {detail.interestedUsers.map(user => {
                                            return <UserItem
                                                key={user._id}
                                                user={user}/>
                                        })}
                                    </li>
                                </ul>
                            </div>

                        ) : null
                    }
                </div>
            </div>
        </div>
        <Footer />
            </>
    );
};

export default EventoryDetailItem;