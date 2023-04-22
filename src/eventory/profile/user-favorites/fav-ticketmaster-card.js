import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { searchEventDetailThunk } from '../../../services/ticketmaster-thunks';

const TicketMasterCardComponent = ({ event }) => {
    const dispatch = useDispatch();

    // local time edge case
    const eventTime = event?.time;
    const eventTimeArray = eventTime?.split(':');
    let localTime;
    if (eventTimeArray) {
        localTime = eventTimeArray[0] + ':' + eventTimeArray[1] + ' EST';
    }
    if (localTime === ':undefined EST') {
        localTime = 'TBD';
    }

    const eventDate = new Date(event?.date);
    const estDate = eventDate.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    // poster edge case
    let posterUrl = '/images/eventory-exclusive-img.jpg';
    if (event?.image) {
        posterUrl = event.image;
    }

    const navigate = useNavigate();

    const cardOnclickHandler = () => {
        const queryParams = new URLSearchParams({
            id: event?._id,
        });
        console.log('card on click id:' + event?._id);
        navigate(`/results/tm/detail/search?${queryParams.toString()}`);
        dispatch(searchEventDetailThunk({ e_id: event?._id }));
    };

    return (
        <div className="card mb-2" onClick={cardOnclickHandler}>
            <div className="row">
                <div className="col-3">
                    <img className="card-img wd-poster" src={posterUrl} alt="poster" />
                </div>
                <div className="col-9 mt-1 mb-0">
                    <div>
                        <div className="fw-bold">
                            {estDate} {localTime}
                        </div>
                        <div className="fw-bold card-title mb-1">{event?.name}</div>
                        <i className="d-inline bi bi-geo-alt-fill me-1"></i>
                        <div className="d-inline text-muted fw-bold">
                            {event?.venueName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketMasterCardComponent;
