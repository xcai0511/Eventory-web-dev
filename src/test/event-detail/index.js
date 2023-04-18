import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DetailItem from "./detail-item";
import {useLocation} from "react-router";
import {searchEventDetailThunk} from "../../services/search-thunks";
import "./detail.css";

const EventDetail = () => {
    const dispatch = useDispatch();
    const link = useLocation();
    const queryParams = new URLSearchParams(link.search);
    const e_id = queryParams.get("id");
    console.log(e_id);
    useEffect(() => {
        dispatch(searchEventDetailThunk({e_id}))
    }, []);

    let {result, loading} = useSelector((state) => state.result);
    console.log(result);
    if (result.length > 1) {
        result = result.find(item => item._id === e_id);
    }
    const resultArray = Object.entries(result);
    console.log(resultArray);
    const detailImage = resultArray.find(([key, value]) => key === 'image');
    const detailName = resultArray.find(([key, value]) => key === 'name');
    const detailTime = resultArray.find(([key, value]) => key === 'time');
    const detailSegment = resultArray.find(([key, value]) => key === 'segment');
    const detailGenre = resultArray.find(([key, value]) => key === 'genre');
    //const detailSubgenre = resultArray.find(([key, value]) => key === 'subgenre');
    const detailDate = resultArray.find(([key, value]) => key === 'date');
    const detailVenueName = resultArray.find(([key, value]) => key === 'venueName');
    const detailVenueAddress = resultArray.find(([key, value]) => key === 'venueAddress');

    const detailVenueCity = resultArray.find(([key, value]) => key === 'venueCity');
    const detailVenuePostalCode = resultArray.find(([key, value]) => key === 'venuePostalCode');
    // const detailDescription = resultArray.find(([key, value]) => key === 'description');
    // const detailLinkToBuy = resultArray.find(([key, value]) => key === 'linkToBuy');

    // const detailAddress = detailVenueName[1] + " " + detailVenueAddress[1].line1 + ", " + detailVenueCity[1] + " " + detailVenuePostalCode[1];
    const ticketButtonOnclick = () => {
        // window.open(detailLinkToBuy[1]);
        console.log("button clicked");
    }

    const [interested, setInterested] = useState(false);
    return (
        <>
            {
                result.length === 0 &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading &&
                <div className="wd-detail-page">
                    <h1>event detail</h1>
                    <div className="wd-poster-container">
                        <img className="wd-poster-frame" src={detailImage[1].url}/>
                        <img className="wd-poster-img" src={detailImage[1].url}/>
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
                        <div className="btn btn-secondary d-inline me-2">{detailSegment[1]}</div>
                        <div className="btn btn-secondary d-inline me-2">{detailGenre[1]}</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col col-md-9 p-md-3">
                            <h1 className="fw-bold">{detailName[1]}</h1>
                            <h4 className="fw-bold mt-3">When and Where</h4>
                            <div className="row mt-3">
                                <div className="col-2 mt-2">
                                    <i className="wd-icon bi bi-calendar-heart"></i>
                                </div>
                                <div className="col-10 mt-0">
                                    <div className="fw-bold">Date and Time</div>
                                    <div>{detailDate[1]} {detailTime[1]}</div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-2 mt-2">
                                    <i className="wd-icon bi bi-geo-alt"></i>
                                </div>
                                <div className="col-10 mt-0">
                                    <div className="fw-bold">Location</div>
                                    <div>{detailVenueName[1]}</div>

                                </div>
                            </div>

                            <h4 className="fw-bold mt-4">Description</h4>
                            <div>DESCTIPTION</div>
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
                /*
                <div className="wd-detail-page mt-3">

                    <div className="row mt-3">
                        <div className="col col-md-9 p-md-3">
                            <h1 className="fw-bold">{detailName[1]}</h1>
                            <h4 className="fw-bold mt-3">When and Where</h4>
                            <div className="row mt-3">
                                <div className="col-2 mt-2">
                                    <i className="wd-icon bi bi-calendar-heart"></i>
                                </div>
                                <div className="col-10 mt-0">
                                    <div className="fw-bold">Date and Time</div>
                                    <div>{detailDate[1]} {detailTime[1]}</div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-2 mt-2">
                                    <i className="wd-icon bi bi-geo-alt"></i>
                                </div>
                                <div className="col-10 mt-0">
                                    <div className="fw-bold">Location</div>
                                    <div>{detailVenueName[1]} {detailVenueAddress[1]}, {detailVenueCity[1]} {detailVenuePostalCode[1]}</div>
                                </div>
                            </div>

                            <h4 className="fw-bold mt-4">Description</h4>
                            <div>DESCTIPTION</div>


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

                 */

            }
        </>
    );

};

export default EventDetail;

