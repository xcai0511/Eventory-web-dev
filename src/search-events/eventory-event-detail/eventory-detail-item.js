import React, {useEffect, useState} from "react";
import "./detail.css";
import "../ticketmaster-event-detail/detail.css";
import {likeEventoryThunk} from "../../services/users-thunk";
import {useDispatch} from "react-redux";
import UserItem from "./user-item";

const EventoryDetailItem = ({detail}) => {
    // interested button
    const [interested, setInterested] = useState(false);
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const likeEvents = currentUser.likedEvents;
    const liked = likeEvents.includes(detail._id);
    useEffect(() => {
        setInterested(liked);
    })

    const eventTime = new Date(detail.time);
    const estD = new Date(eventTime.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const estTime = estD.toLocaleString('en-US', { timeZone: 'America/New_York', minute: '2-digit', second: '2-digit' });

    const eventDate = new Date(detail.date);
    const estDate = eventDate.toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

    const intUser = detail.interestedUsers;

    const dispatch = useDispatch();
    const likeButtonOnclickHandler = async (e) => {
        e.stopPropagation();
        let action;
        if (interested) {
            action = 'dislike'
        } else {
            action = 'like'
        }
        console.log("before dispatch " + detail._id);
        const { payload: { message } = {} } = await dispatch(likeEventoryThunk({eventId: detail._id, action: action}));
        console.log(message);
        if (message === "Unauthorized.") {
            alert("Please log in or sign up to like an event!");
        } else {
            let newLikeEvents = [];
            if (likeEvents.includes(detail._id)) {
                newLikeEvents = likeEvents.filter(id => id !== detail._id);
            } else {
                newLikeEvents = likeEvents.concat(detail._id);
            }
            currentUser.likedEvents = newLikeEvents;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            console.log("new user after like")
            currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log(currentUser);
            setInterested(!interested);
        }
    };

    return(

        <div className="wd-detail-page mt-3">
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
                            <div>{estDate} {estTime}</div>
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
                            <div className="mt-3">
                                <h4 className="fw-bold">Organizer</h4>
                                <div className="border rounded wd-organier">
                                    <div>{detail.organizer.name}</div>
                                    <div>{detail.organizer.bio}</div>
                                </div>
                            </div>
                        ) : null
                    }

                    <h4 className="fw-bold mt-4">Description</h4>
                    <div>{detail.description}</div>

                    {
                        intUser ? (
                            <div className="mt-3">
                                <h4 className="fw-bold list-group-item wd-user-list">Liked Users</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        {intUser.map(user => {
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
    );
};

export default EventoryDetailItem;