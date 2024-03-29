import React, {useEffect, useState} from "react";
import "./detail.css";
import {likeTicketmasterThunk} from "../../services/users-thunk";
import {useDispatch, useSelector} from "react-redux";
import UserItem from "../eventory-event-detail/user-item";

const TicketmasterDetailItem = ({detail}) => {
    // interested button
    const [interested, setInterested] = useState(false);

    const currentUser = useSelector((state) => state.auth.currentUser);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const likeEvents = currentUser.likedTicketmasterEvents;
            setInterested(likeEvents.includes(detail._id));
        }
    }, []);

    const resultTime = detail.time;
    const resultTimeArray = resultTime?.split(":");
    let localTime;
    if (resultTimeArray) {
        localTime = resultTimeArray[0] + ":" + resultTimeArray[1] + " EST"
    }
    if (localTime === ":undefined EST") {
        localTime = "TBD";
    }

    // detail date
    const detailDate = new Date(detail.date);
    const detailDateString = detailDate.toString();
    const dateArray = detailDateString.split(" ");
    const eventDate = dateArray[0] + ", " + dateArray[1] + " " + dateArray[2] + ", " + dateArray[3];
    // address
    // buy ticket
    const ticketButtonOnclick = () => {
        window.open(detail.linkToBuy);
    }

    const dispatch = useDispatch();
    const likeButtonOnclickHandler = async (e) => {
        e.stopPropagation();
        let action;
        if (interested) {
            action = 'dislike'
        } else {
            action = 'like'
        }
        const { payload: { message } = {} } = await dispatch(likeTicketmasterThunk({eventId: detail._id, action: action}));

        if (message === "Unauthorized.") {
            alert("Please log in or sign up to like an event!");
        } else {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            let newLikeEvents = [];
            if (interested) {
                newLikeEvents = currentUser.likedTicketmasterEvents.filter(id => id !== detail._id);
            } else {
                newLikeEvents = currentUser.likedTicketmasterEvents.concat(detail._id);
            }
            currentUser.likedTicketmasterEvents = newLikeEvents;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            setInterested(!interested);
        }
    };

    return(
        <div className="wd-detail-page mt-3">
            <div className="wd-poster-container">
                <img className="wd-poster-frame" src={detail.image}/>
                <img className="wd-poster-img" src={detail.image}/>
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
                <div className="btn btn-secondary d-inline me-2">{detail.segment}</div>
                <div className="btn btn-secondary d-inline me-2">{detail.genre}</div>
                {
                    detail.subgenre ? (
                        <div className="btn btn-secondary d-inline">{detail.subgenre}</div>
                    ) : null
                }
            </div>
            <div className="row mt-3">
                <div className="col col-md-9 p-md-3">
                    <h1 className="fw-bold">{detail.name}</h1>
                    <h4 className="fw-bold mt-3">When and Where</h4>
                    <div className="row mt-3">
                        <div className="col-2 mt-2">
                            <i className="wd-icon bi bi-calendar-heart"></i>
                        </div>
                        <div className="col-10 mt-0">
                            <div className="fw-bold">Date and Time</div>
                            <div>{eventDate} {localTime}</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-2 mt-2">
                            <i className="wd-icon bi bi-geo-alt"></i>
                        </div>
                        <div className="col-10 mt-0">
                            <div className="fw-bold">Location</div>
                            <div>{detail.venueName} {detail.venueAddress}, {detail.venueCity} {detail.venuePostalCode}</div>
                        </div>
                    </div>

                    {
                        detail.description ? (
                            <div>
                                <h4 className="fw-bold mt-4">Description</h4>
                                <div>{detail.description}</div>
                            </div>
                        ) : null
                    }

                    {
                        currentUser && detail.interestedUsers ? (
                            <div className="mt-3">
                                <h4 className="fw-bold list-group-item">Interested Users</h4>
                                <ul className="list-group wd-liked-user-list">
                                    <li className="list-group-item">
                                        {detail.interestedUsers.map(user => {
                                            return <UserItem
                                                key={user._id}
                                                user={user}/>
                                        })}
                                    </li>
                                </ul>
                            </div>

                        ) : <div>
                            <h4 className="fw-bold list-group-item mt-4">Interested Users</h4>
                            <ul className="list-group wd-liked-user-list ">
                                <li className="list-group-item pt-3 pb-0">
                                    <p>Please log in to view interested users.</p>
                                </li>
                            </ul>
                        </div>
                    }

                </div>
                <div className="d-none d-md-block col-md-3 mt-4">
                    <div>
                        <h4 className="fw-bold">Link to buy</h4>
                        <button className="btn btn-warning wd-button-link mt-2" onClick={ticketButtonOnclick}>
                            Buy Tickets
                        </button>
                    </div>
                </div>
                <div className="d-md-none wd-footer">
                    <button className="btn btn-warning wd-button-link" onClick={ticketButtonOnclick}>
                        Buy Tickets
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketmasterDetailItem;