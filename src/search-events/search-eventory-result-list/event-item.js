import {useEffect, useState} from "react";
import React from "react";
import {useDispatch} from "react-redux";
import "./event.css";
import "../search-ticketmaster-result-list/result.css";
import {useNavigate} from "react-router-dom";
import {eventIdThunk} from "../../services/eventory-thunks";
import {likeEventoryThunk} from "../../services/users-thunk";
import {profileThunk} from "../../services/auth-thunks";

const EventoryResultItem = ({event}) => {

    // local time edge case

    const eventTime = new Date(event.time);
    const estD = new Date(eventTime.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const estTime = estD.toLocaleString('en-US', { timeZone: 'America/New_York', minute: '2-digit', second: '2-digit' });

    const eventDate = new Date(event.date);
    const estDate = eventDate.toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

    // interested button
    const [interested, setInterested] = useState(false);
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // const likeEvents = currentUser.likedEvents;
    // useEffect(() => {
    //     setInterested(likeEvents.includes(event._id));
    // }, [likeEvents]);
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
        console.log(`card on click ${event._id}`)
        dispatch(eventIdThunk(event._id));
        navigate(`/results/ev/detail/search?${queryParams.toString()}`);
        // dispatch(eventIdThunk(event._id));
    };

    // const likeButtonOnclickHandler = async (e) => {
    //     e.stopPropagation();
    //     let action;
    //     if (interested) {
    //         action = 'dislike'
    //     } else {
    //         action = 'like'
    //     }
    //     console.log("before dispatch " + event._id);
    //     const { payload: { message } = {} } = await dispatch(likeEventoryThunk({eventId: event._id, action: action}));
    //     console.log(message);
    //     if (message === "Unauthorized.") {
    //         alert("Please log in or sign up to like an event!");
    //     } else {
    //         let newLikeEvents = [];
    //         if (likeEvents.includes(event._id)) {
    //             newLikeEvents = likeEvents.filter(id => id !== event._id);
    //         } else {
    //             newLikeEvents = likeEvents.concat(event._id);
    //         }
    //         const newCurrentUser = { ...currentUser, likedEvents: newLikeEvents };
    //         localStorage.setItem('currentUser', JSON.stringify(newCurrentUser));
    //         console.log("new user after like")
    //         console.log(newCurrentUser);
    //         setInterested(!interested);
    //     }
    // };
    const likeButtonOnclickHandler = async (e) => {
        e.stopPropagation();
        let action;
        if (interested) {
            action = 'dislike';
        } else {
            action = 'like';
        }
        const { payload: { message } = {} } = await dispatch(likeEventoryThunk({eventId: event._id, action: action}));
        console.log(message);
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
        <div className="card mb-2" onClick={cardOnclickHandler}>
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
                            {estDate} {estTime} EST

                        </div>
                        <div className="fw-bold card-title mb-1">
                            {event.name}
                        </div>
                        <i className="d-inline bi bi-geo-alt-fill me-1"></i>
                        <div className="d-inline text-muted fw-bold">
                            {event.address}
                        </div>
                        {/*<div className="text-muted">*/}
                        {/*    {intCount} interested*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventoryResultItem;