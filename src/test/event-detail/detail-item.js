import React, {useState} from "react";
import "./detail.css";
import GoogleMapReact from 'google-map-react';
import { loadGoogleMapsAPI } from "google-maps-api-loader";
import Map from "./map";

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
    // address
    const [showMap, setShowMap] = useState(false);
    const [center, setCenter] = useState({lat: 0, lng: 0});
    const [zoom, setZoom] = useState(8);
    const showAddressOnclick = async () => {
        setShowMap(!showMap);
        const address = detail.venueAddress;
        try {
            const maps = await loadGoogleMapsAPI({ key: 'MAPS_API_KEY' });
            const geocoder = new maps.Geocoder();
            const results = await geocoder.geocode({address});
            const { lat, lng } = results[0].geometry.location;
            setCenter({ lat, lng });
            setZoom(15);
        } catch (error) {
            console.log(error);
        }
    };


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
                <div>Genre:  #{detail.genre}</div>
            </div>
            <div className="row mt-3">
                <div className="col-8 me-3">
                    <h1 className="fw-bold">{detail.name}</h1>
                    <h4 className="fw-bold">When and Where</h4>
                    <div className="row mt-2">
                        <div className="col-2 mt-2">
                            <i className="wd-icon bi bi-calendar-heart"></i>
                        </div>
                        <div className="col-10 mt-0">
                            <div className="fw-bold">Date and Time</div>
                            <div>{eventDate} {eventTime}</div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-2 mt-2">
                            <i className="wd-icon bi bi-geo-alt"></i>
                        </div>
                        <div className="col-10 mt-0">
                            <div className="fw-bold">Location</div>
                            <div>{detail.venueName} {detail.venueAddress}, {detail.venueCity} {detail.venuePostalCode}</div>
                            <div className="btn" onClick={showAddressOnclick}>Show Map</div>
                            {
                                showMap &&
                                <Map center={center} zoom={zoom}/>
                            }
                        </div>
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