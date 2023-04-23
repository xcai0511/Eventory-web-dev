import {useEffect, useState} from "react";
import React from "react";
import {useDispatch} from "react-redux";
import "./event.css";
import "../search-ticketmaster-result-list/result.css";
import {useNavigate} from "react-router-dom";
import {eventIdThunk} from "../../services/eventory-thunks";
import {likeEventoryThunk} from "../../services/users-thunk";

const EventoryResultItem = ({event}) => {
    const eventTime = new Date(event?.time).toLocaleTimeString('en-US', {
        timeZone: 'America/New_York', hour12: false, });
    const eventTimeDisplay = eventTime?.split(":");
    let localTime;
    if (eventTimeDisplay) {
        localTime = eventTimeDisplay[0] + ":" + eventTimeDisplay[1]
    }

    const eventDate = new Date(event.date);
    const estDate = eventDate.toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

    // interested button
    const [interested, setInterested] = useState(false);
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const likeEvents = currentUser.likedEvents;
            setInterested(likeEvents.includes(event._id));
        }
    }, [event._id]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cardOnclickHandler = () => {
        const queryParams = new URLSearchParams({
            id: event._id,
        });
        dispatch(eventIdThunk(event._id));
        navigate(`/results/ev/detail/search?${queryParams.toString()}`);
    };

    const likeButtonOnclickHandler = async (e) => {
        e.stopPropagation();
        let action;
        if (interested) {
            action = 'dislike';
        } else {
            action = 'like';
        }
        const { payload: { message } = {} } = await dispatch(likeEventoryThunk({eventId: event._id, action: action}));
        if (message === "Unauthorized.") {
            alert("Please log in or sign up to like an event!");
        } else {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            let newLikeEvents = [];
            if (interested) {
                newLikeEvents = currentUser.likedEvents.filter(id => id !== event._id);
            } else {
                newLikeEvents = currentUser.likedEvents.concat(event._id);
            }
            currentUser.likedEvents = newLikeEvents;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            setInterested(!interested);
        }
    };

    return (
        <div className="card mb-2" onClick={cardOnclickHandler} style={{cursor:"pointer"}}>
            <div className="row">
                <div className="col-3 mt-0">
                    <img className="card-img wd-poster" src="/images/eventory-exclusive-img.png" alt="poster"/>
                </div>
                <div className="col-9 mt-1 mb-0">
                    <div>
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
                        <small className="wd-exclusive">Exclusive Event</small>
                        <div className="fw-bold">
                            {estDate} {localTime} EST

                        </div>
                        <div className="fw-bold card-title mb-1">
                            {event.name}
                        </div>
                        <i className="d-inline bi bi-geo-alt-fill me-1"></i>
                        <div className="d-inline text-muted fw-bold">
                            {event.address}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventoryResultItem;