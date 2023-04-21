import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { profileThunk } from '../../../services/auth-thunks';
import { eventIdThunk } from '../../../services/eventory-thunks';
import EventCardComponent from './fav-event-card';

const UserFavoritesComponent = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
    const [eventDetails, setEventDetails] = useState({});

    useEffect(() => {
        dispatch(profileThunk());

        // fetch event details for all liked events
        const promises = currentUser.likedEvents.map((eventId) => {
            return dispatch(eventIdThunk({ eventId }))
                .then((response) => {
                    return {
                        eventId,
                        eventDetails: response.payload,
                    };
                })
                .catch((error) => {
                    console.log(error);
                });
        });

        Promise.all(promises).then((results) => {
            // store event details in component state
            const newEventDetails = {};
            results.forEach((result) => {
                newEventDetails[result.eventId] = result.eventDetails;
            });
            setEventDetails(newEventDetails);
        });
    }, [currentUser, dispatch]);

    console.log(
        'current user in the user favorite content:' + JSON.stringify(currentUser)
    );

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
            {/* content */}
            {currentUser.likedEvents.length === 0 ? (
                <div className="mt-4">No favorites yet</div>
            ) : (
                <div className="card-columns">
                    {currentUser.likedEvents.map((eventId) => (
                        <EventCardComponent key={eventId} event={eventDetails[eventId]} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserFavoritesComponent;
