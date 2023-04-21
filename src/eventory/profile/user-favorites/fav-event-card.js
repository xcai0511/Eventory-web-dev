import React from 'react';
import { useDispatch } from 'react-redux';
import { eventIdThunk } from '../../../services/eventory-thunks';
import { useNavigate } from 'react-router-dom';

const EventCardComponent = ({ event }) => {
    const eventTime = new Date(event?.time);
    const estD = new Date(
        eventTime.toLocaleString('en-US', { timeZone: 'America/New_York' })
    );
    const estTime = estD.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        minuteS: '2-digit',
        secondS: '2-digit',
    });

    const eventDate = new Date(event?.date);
    const estDate = eventDate.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    // poster
    let posterUrl = '/images/eventory-exclusive-img.png';
    if (event?.image) {
        posterUrl = event.image;
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cardOnclickHandler = () => {
        const queryParams = new URLSearchParams({
            id: event._id,
        });
        console.log(`card on click ${event._id}`);
        dispatch(eventIdThunk(event._id));
        navigate(`/results/ev/detail/search?${queryParams.toString()}`);
        // dispatch(eventIdThunk(event._id));
    };

    return (
        <div className="card mb-2 favorites-card" onClick={cardOnclickHandler}>
            <div className="row">
                <div className="col-3 mt-2">
                    <img className="card-img wd-poster" src={posterUrl} alt="poster" />
                </div>
                <div className="col-9 mt-1 mb-0">
                    <div>
                        <div className="float-end"></div>
                        <small className="wd-exclusive">Exclusive Event</small>
                        <div className="fw-bold">
                            {estDate} {estTime}
                        </div>
                        <div className="fw-bold card-title mb-1">{event?.name}</div>
                        <i className="d-inline bi bi-geo-alt-fill me-1"></i>
                        <div className="d-inline text-muted fw-bold">
                            {event?.address} {event?.postalCode}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCardComponent;
