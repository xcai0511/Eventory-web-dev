import React from 'react';
import { useDispatch } from 'react-redux';
import { eventIdThunk } from '../../../services/eventory-thunks';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const ExclusiveEventCardComponent = ({ event }) => {
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
        <div className="card mb-2" onClick={cardOnclickHandler} style={{cursor:"pointer"}}>
            <div className="row">
                <div className="col-3 mt-0">
                    <img className="card-img wd-poster" src={posterUrl} alt="poster" />
                </div>
                <div className="col-9 mt-1 mb-0">
                    <div>
                        <h4 className="mt-2 fw-bold card-title mb-1">{event?.name}</h4>
                        <div className="mt-3">
                            <div className="mb-1">
                                <FontAwesomeIcon
                                    icon={icon({ name: 'calendar-days', style: 'solid' })}
                                    className="icon-15px"
                                />
                                <span className="fw-bold ms-1">Date: </span>
                                <span className="ms-1">{estDate}</span>
                            </div>
                            <div className="mb-1">
                                <FontAwesomeIcon
                                    icon={icon({ name: 'location-dot', style: 'solid' })}
                                    className="icon-15px"
                                />
                                <span className="fw-bold ms-1">Location: </span>
                                <span className="ms-1">
                                    {event?.address} {event?.postalCode}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveEventCardComponent;
