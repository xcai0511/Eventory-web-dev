import React, {useState} from "react";
import "./detail.css";

const DetailItem = ({detail}) => {
    const [interested, setInterested] = useState(false);
    // detail time
    console.log("detail");
    console.log(detail);

    // detail time
    const detailTime = detail.time;
    const detailTimeArray = detailTime.split(":");
    const eventTime = detailTimeArray[0] + " : " + detailTimeArray[1] + " EDT";

    // detail date
    const detailDate = new Date(detail.date);
    const detailDateString = detailDate.toString();
    const dateArray = detailDateString.split(" ");
    const eventDate = dateArray[0] + ", " + dateArray[1] + " " + dateArray[2] + ", " + dateArray[3];
    // address
    const [showMap, setShowMap] = useState(false);
    const showAddressOnclick = async () => {
        setShowMap(!showMap);
    };
    // buy ticket
    const ticketButtonOnclick = () => {
        window.open(detail.linkToBuy);
    }



    return(

        <div className="wd-detail-page mt-3">
            <div className="wd-poster-container">
                <img className="wd-poster-frame" src={`/images/${detail.image}`}/>
                <img className="wd-poster-img" src={`/images/${detail.image}`}/>
            </div>
            <div className="mt-3 mb-2">
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
                                        Interested
                                    </div>
                                    <i className="d-inline bi bi-star"></i>
                                </>
                            )
                        }
                    </button>
                </div>
                <div className="btn btn-secondary d-inline me-2">{detail.segment}</div>
                <div className="btn btn-secondary d-inline">{detail.genre}</div>
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
                            <div>{eventDate} {detail.time}</div>
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

                    <h4 className="fw-bold mt-4">Description</h4>
                    <div>{detail.description}</div>


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

export default DetailItem;