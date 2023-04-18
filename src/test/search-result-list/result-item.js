import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./result.css";
import {useNavigate} from "react-router-dom";

const ResultItem = ({result}) => {
    const dispatch = useDispatch();

    // local time edge case
    const resultTime = result.time;
    const resultTimeArray = resultTime?.split(":");
    let localTime = "TBD";
    if (resultTimeArray) {
        localTime = resultTimeArray[0] + ":" + resultTimeArray[1] + " EST"
    }

    const resultDate = new Date(result.date);
    const estDate = resultDate.toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    console.log(estDate);
    // poster edge case
    let posterUrl = "event1.jpg";
    if (result.image.url) {
        posterUrl = result.image.url;
    }

    // interested button
    const [interested, setInterested] = useState(false);

    const navigate = useNavigate();
    const cardOnclickHandler = () => {
        const queryParams = new URLSearchParams({
            id: result._id,
        });
        navigate(`/results/detail/search?${queryParams.toString()}`);
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
