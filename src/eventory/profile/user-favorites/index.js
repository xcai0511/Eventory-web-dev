import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { profileThunk } from '../../../services/auth-thunks';
import { eventIdThunk } from '../../../services/eventory-thunks';
import EventCardComponent from './fav-exclusive-card';
import { searchEventDetailThunk } from '../../../services/ticketmaster-thunks';
import TicketMasterCardComponent from './fav-ticketmaster-card';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UserFavoritesComponent = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [exclusiveEventList, setExclusiveEventList] = useState({});
    const [ticketMasterEventList, setTicketMasterEventList] = useState({});
    const [errorEvents, setErrorEvents] = useState(new Set());
    useEffect(() => {
        dispatch(profileThunk());

        // fetch event details for all liked events
        const fetchEventDetails = async () => {
            // exclusive events
            const newExclusiveEventList = {};
            for (const eventId of currentUser.likedEvents) {
                try {
                    const response = await dispatch(eventIdThunk({ eventId }));
                    newExclusiveEventList[eventId] = response.payload;
                } catch (error) {
                    console.log(error);
                }
            }
            setExclusiveEventList(newExclusiveEventList);
            // ticket master events
            const newTicketMasterEventList = {};

            for (const eventId of currentUser.likedTicketmasterEvents) {
                try {
                    const res = await dispatch(searchEventDetailThunk({ e_id: eventId }));
                    if (
                        res.payload.message ===
                        'Exceeded Ticketmaster API rate limit. Please wait and try again.'
                    ) {
                        setErrorEvents(new Set(errorEvents.add(eventId)));
                    } else {
                        newTicketMasterEventList[eventId] = res.payload;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            setTicketMasterEventList(newTicketMasterEventList);
        };
        fetchEventDetails();
    }, []);

    return (
        <div className="container">
            {/* title */}
            <div className="border-bottom pb-2">
                <FontAwesomeIcon
                    icon={icon({ name: 'heart', style: 'solid' })}
                    className="icon-20px"
                />
                <span className="h4 fw-bold ms-2">Favorites</span>
            </div>
            {/* content: exclusive events */}
            {currentUser.likedEvents.length === 0 &&
            currentUser.likedTicketmasterEvents.length === 0 ? (
                <div className="mt-4">
                    <h5 className="fw-bold my-2">No favorites yet</h5>
                    <div>
                        <div>
                            Browse our wide variety of events to find the perfect match.
                            <Link
                                to="/home"
                                style={{ color: '#00509d' }}
                                className="ms-1">
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {/* exclusive */}
                    <div className="card-columns mt-3">
                        {currentUser.likedEvents.map((eventId) => (
                            <EventCardComponent
                                key={eventId}
                                event={exclusiveEventList[eventId]}
                            />
                        ))}
                    </div>
                    {/* Ticketmaster */}
                    <div className="card-columns">
                        {currentUser.likedTicketmasterEvents
                            .filter((eventId) => !errorEvents.has(eventId))
                            .map((eventId) => (
                                <TicketMasterCardComponent
                                    key={eventId}
                                    event={ticketMasterEventList[eventId]}
                                />
                            ))}
                    </div>
                    {errorEvents.size > 0 && (
                        <div className="error-card py-3">
                            <h5>
                                Oops! Some of your liked events couldn't be displayed
                                right now due to API limits.
                            </h5>
                            <p>
                                Please try again later or refresh the page to see if they
                                show up. Thank you for your patience!
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default UserFavoritesComponent;
