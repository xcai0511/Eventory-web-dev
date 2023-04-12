import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

const ResultItem = ({result}) => {

    // local time edge case
    const resultTime = result.time;
    const resultTimeArray = resultTime?.split(":");
    let localTime = "TBD";
    if (resultTimeArray) {
        localTime = resultTimeArray[0] + ":" + resultTimeArray[1] + " EST"
    }

    // poster edge case
    let posterUrl = "event1.jpg";
    if (result.image.url) {
        posterUrl = result.image.url;
    }

    const dispatch = useDispatch();

    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-3">
                    <img className="card-img" src={posterUrl} alt="poster"/>
                </div>
                <div className="col-9 mt-1 mb-0">
                    <div>
                        <div className="float-end">
                            <button className="btn btn-light">
                                <div className="d-inline me-2">
                                    Interested
                                </div>
                                <i className="d-inline bi bi-star"></i>
                            </button>
                        </div>
                        {result.time ? (
                                <div className="fw-bold">
                                    {result.date} {localTime}
                                </div>
                            ) :
                            (
                                <div className="fw-bold">
                                    {result.date} "TBD"
                                </div>
                            )
                        }

                        <div className="fw-bold card-title">
                            {result.name}
                        </div>
                        <i className="d-inline bi bi-geo-alt-fill me-1"></i>
                        <div className="d-inline text-muted fw-bold">
                            {result.venueName}
                        </div>
                        <div className="text-muted">
                            {result.interestedCount} interested · {result.goingCount} going
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultItem;
