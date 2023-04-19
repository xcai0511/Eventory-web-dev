import React, {useState} from "react";
import "./detail.css";
import "../ticketmaster-event-detail/detail.css";

const EventoryDetailItem = ({detail}) => {
    const [interested, setInterested] = useState(false);

    const eventTime = new Date(detail.time);
    const estD = new Date(eventTime.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const estTime = estD.toLocaleString('en-US', { timeZone: 'America/New_York', minute: '2-digit', second: '2-digit' });

    const eventDate = new Date(detail.date);
    const estDate = eventDate.toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

    return(

        <div className="wd-detail-page mt-3">
            <div className="wd-poster-container">
                <img className="wd-poster-frame" src={detail.image}/>
                <img className="wd-poster-img" src={detail.image}/>
            </div>
            <div className="mt-3 mb-2">
                <div className="float-end">
                    <button className="btn btn-light" onClick={() => setInterested(!interested)}>
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
                        ) : (null)
                    }

                    <h4 className="fw-bold mt-4">Description</h4>
                    <div>{detail.description}</div>
                </div>
            </div>
        </div>
    );
};

export default EventoryDetailItem;