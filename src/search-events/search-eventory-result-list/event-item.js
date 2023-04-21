import {useState} from "react";
import React from "react";
import {useDispatch} from "react-redux";
import "./event.css";
import "../search-ticketmaster-result-list/result.css";
import {useNavigate} from "react-router-dom";
import {eventIdThunk} from "../../services/eventory-thunks";
import {likeEventoryThunk} from "../../services/users-thunk";

const EventoryResultItem = ({event}) => {

    // local time edge case

    const eventTime = new Date(event.time);
    const estD = new Date(eventTime.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const estTime = estD.toLocaleString('en-US', { timeZone: 'America/New_York', minute: '2-digit', second: '2-digit' });

    const eventDate = new Date(event.date);
    const estDate = eventDate.toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

    // interested count
    let intCount = 0;
    if (event.interestedUsers) {
        intCount = event.interestedUsers.length;
    }

    // interested button
    // TODO: link current event to current user
    const [interested, setInterested] = useState(false);

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

    const likeButtonOnclickHandler = async (e) => {
        e.stopPropagation();
        let action;
        if (interested) {
            action = 'dislike'
        } else {
            action = 'like'
        }
        console.log("before dispatch " + event._id);
        const { payload: { message } = {} } = await dispatch(likeEventoryThunk({eventId: event._id, action: action}));
        console.log(message);
        if (message === "Unauthorized.") {
            alert("Please log in or sign up to like an event!");
        } else {
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
                        <div className="text-muted">
                            {intCount} interested
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventoryResultItem;