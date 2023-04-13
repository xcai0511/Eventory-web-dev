import {useState} from "react";
import React from "react";
import {useDispatch} from "react-redux";
import "./event.css";

const EventItem = ({event}) => {

    // local time edge case
    //const eventTime = event.time;
    //const eventTimeArray = eventTime?.split(":");
    //let localTime = "TBD";
    //if (eventTimeArray) {
        //localTime = eventTimeArray[0] + ":" + eventTimeArray[1] + " EST"
    //}

    // poster edge case
    let posterUrl = "event1.jpg";
    //if (event.image.url) {
        //posterUrl = event.image.url;
    //}

    // interested count
    let intCount = 0;
    if (event.interestedUsers) {
        intCount = event.interestedUsers.length;
    }

    // going count
    let goingCount = 0;
    if (event.registeredUsers) {
        goingCount = event.registeredUsers.length;
    }

    // interested button
    const [interested, setInterested] = useState(false);

    const dispatch = useDispatch();

    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-3">
                    <img className="card-img wd-poster" src={posterUrl} alt="poster"/>
                </div>
                <div className="col-9 mt-1 mb-0">
                    <div>
                        <div className="float-end">
                            <button className="btn btn-light" onClick={() => setInterested(!interested)}>
                                {
                                    interested ? (
                                        <>
                                            <div className="d-inline me-2">
                                                Interested
                                            </div>
                                            <i className="d-inline bi bi-star-fill wd-yellow"></i>
                                        </>) : (
                                        <>
                                            <div className="d-inline me-2">
                                                Interest
                                            </div>
                                            <i className="d-inline bi bi-star"></i>
                                        </>
                                    )
                                }
                            </button>
                        </div>
                        {event.time ? (
                                <div className="fw-bold">
                                    {event.dateAndTime}
                                </div>
                            ) :
                            (
                                <div className="fw-bold">
                                    {event.dateAndTime}
                                </div>
                            )
                        }
                        <div className="fw-bold card-title mb-1">
                            {event.name}
                        </div>
                        <i className="d-inline bi bi-geo-alt-fill me-1"></i>
                        <div className="d-inline text-muted fw-bold">
                            {event.venueName}
                        </div>
                        <div className="text-muted">
                            {intCount} interested · {goingCount} going
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventItem;