import React, {useState} from "react";
import "./detail.css";
const DetailItem = ({detail}) => {
    const [interested, setInterested] = useState(false);
    // detail time
    const detailTime = detail.time;
    const detailTimeArray = detailTime.split(":");
    const eventTime = detailTimeArray[0] + " : " + detailTimeArray[1] + " EDT";
    // detail date
    const detailDate = new Date(detail.date);
    const detailDateString = detailDate.toString();
    const dateArray = detailDateString.split(" ");
    console.log(dateArray);
    const eventDate = dateArray[0] + ", " + dateArray[1] + " " + dateArray[2] + ", " + dateArray[3];


    return(
        <div className="wd-detail-page mt-3">
            <div className="wd-poster-container">
                <img className="wd-poster-frame" src={`/images/${detail.image}`}/>
                <img className="wd-poster" src={`/images/${detail.image}`}/>
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
                                        Interest
                                    </div>
                                    <i className="d-inline bi bi-star"></i>
                                </>
                            )
                        }
                    </button>
                </div>
                <div>Detail</div>
            </div>
            <div className="row mt-3">
                <div className="col-8 me-3">
                    <h1 className="fw-bold">{detail.name}</h1>
                    <div className="border rounded mb-2 pt-3 pb-3">
                        Organization Info
                    </div>
                    <div className="row mt-2">
                        <h3 className="fw-bold">When</h3>
                        <div className="col-2 mt-2">
                            <i className="wd-icon bi bi-calendar-heart"></i>
                        </div>
                        <div className="col-10 mt-0">
                            <div>Date: {eventDate}</div>
                            <div>Time: {eventTime}</div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="fw-bold">Where</h3>
                        <div>{detail.venueName}</div>
                        <div>{detail.venueCity}</div>
                        <div>{detail.venuePostalCode}</div>
                        <div>{detail.venueAddress}</div>
                    </div>
                </div>
                <div className="col-3 mt-3 ms-5">
                    <div className="border rounded pb-5 pt-5">
                        buy tickets
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DetailItem;