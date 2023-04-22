import {useNavigate} from "react-router-dom";
import React from "react";

const UsersHomeLikedEventComponent = ({eventoryEvent}) => {
    const navigate = useNavigate();
    const usersHomeLikedEventComponentOnClickHandler = () => {
        const queryParams = new URLSearchParams({
            id: eventoryEvent._id,
        });
        navigate(`/results/ev/detail/search?${queryParams.toString()}`);
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return (
        (eventoryEvent && (
            <div className="col-12 col-md-6 col-lg-4 col-xxl-3 p-2" onClick={usersHomeLikedEventComponentOnClickHandler}>
                <div className="card m-1">
                    <img className="card-img-top events-card-image" src="/images/eventory-exclusive-img.png"/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">
                            {eventoryEvent.name.length > 24
                                ? `${eventoryEvent.name.substring(0, 24)}...`
                                : eventoryEvent.name}
                        </h5>
                        <p className="card-subtitle mb-2 text-muted">{formatDate(eventoryEvent.date)}</p>
                        <h6 className="card-subtitle text-muted">{eventoryEvent.address}</h6>
                    </div>
                </div>
            </div>
        ))
    )
};

export default UsersHomeLikedEventComponent;