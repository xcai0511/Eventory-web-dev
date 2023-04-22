import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import "./result.css";
import {useNavigate} from "react-router-dom";
import {searchEventDetailThunk} from "../../services/ticketmaster-thunks";
import {likeTicketmasterThunk} from "../../services/users-thunk";

const ResultItem = ({result}) => {
    const dispatch = useDispatch();
    console.log("ResltItem");
    console.log(result)

    // local time edge case
    const resultTime = result.time;
    const resultTimeArray = resultTime?.split(":");
    let localTime;
    if (resultTimeArray) {
        localTime = resultTimeArray[0] + ":" + resultTimeArray[1] + " EST"
    }
    if (localTime === ":undefined EST") {
        localTime = "TBD";
    }

    const resultDate = new Date(result.date);
    const estDate = resultDate.toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    // poster edge case
    let posterUrl = "event1.jpg";
    if (result.image) {
        posterUrl = result.image;
    }

    // interested button
    const [interested, setInterested] = useState(false);
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const likeEvents = currentUser.likedTicketmasterEvents;
            setInterested(likeEvents.includes(result._id));
        }
    }, [result._id]);

    const navigate = useNavigate();
    const cardOnclickHandler = () => {
        const queryParams = new URLSearchParams({
            id: result._id,
        });
        navigate(`/results/tm/detail/search?${queryParams.toString()}`);
        dispatch(searchEventDetailThunk(result.id));
    };

    const likeButtonOnclickHandler = async (e) => {
        e.stopPropagation();
        let action;
        if (interested) {
            action = 'dislike';
        } else {
            action = 'like';
        }
        const { payload: { message } = {} } = await dispatch(likeTicketmasterThunk({eventId: result._id, action: action}));
        console.log(message);
        if (message === "Unauthorized.") {
            alert("Please log in or sign up to like an event!");
        } else {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            let newLikeEvents = [];
            if (interested) {
                newLikeEvents = currentUser.likedTicketmasterEvents.filter(id => id !== result._id);
            } else {
                newLikeEvents = currentUser.likedTicketmasterEvents.concat(result._id);
            }
            currentUser.likedTicketmasterEvents = newLikeEvents;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            setInterested(!interested);
        }
    };

    return (
        <div className="card mb-2" onClick={cardOnclickHandler}>
            <div className="row">
                <div className="col-3">
                    <img className="card-img wd-poster" src={posterUrl} alt="poster"/>
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
                        <div className="fw-bold">
                            {estDate} {localTime}
                        </div>
                        <div className="fw-bold card-title mb-1">
                            {result.name}
                        </div>
                        <i className="d-inline bi bi-geo-alt-fill me-1"></i>
                        <div className="d-inline text-muted fw-bold">
                            {result.venueName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultItem;
