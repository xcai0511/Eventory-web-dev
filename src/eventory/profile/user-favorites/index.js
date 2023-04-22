import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { profileThunk } from '../../../services/auth-thunks';
import { eventIdThunk } from '../../../services/eventory-thunks';
import EventCardComponent from './fav-exclusive-card';
import { searchEventDetailThunk } from '../../../services/ticketmaster-thunks';
import TicketMasterCardComponent from './fav-ticketmaster-card';

const UserFavoritesComponent = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
    const [exclusiveEventList, setExclusiveEventList] = useState({});
    const [ticketMasterEventList, setTicketMasterEventList] = useState({});
    const [noEvent, setNoEvent] = useState(false);
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
            console.log(
                'currentUser: ' + JSON.stringify(currentUser.likedTicketmasterEvents)
            );
            for (const eventId of currentUser.likedTicketmasterEvents) {
                try {
                    console.log('event id: ' + eventId);
                    const res = await dispatch(searchEventDetailThunk({ e_id: eventId }));
                    if (res.payload.message === "Exceeded Ticketmaster API rate limit. Please wait and try again.") {
                        setNoEvent(true);
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
                <div className="mt-4">No favorites yet</div>
            ) : (
                <>
                    {/* exclusive */}
                    <div className="card-columns">
                        {currentUser.likedEvents.map((eventId) => (
                            <EventCardComponent
                                key={eventId}
                                event={exclusiveEventList[eventId]}
                            />
                        ))}
                    </div>
                    {/* Ticketmaster */}
                    {
                        !noEvent ? (
                            <div className="card-columns">
                                {currentUser.likedTicketmasterEvents.map((eventId) => (
                                    <TicketMasterCardComponent
                                        key={eventId}
                                        event={ticketMasterEventList[eventId]}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div>
                                <div>We can't load your favorite Ticketmaster event.</div>
                                <div>Exceeded Ticketmaster API rate limit.</div>
                                <div>Please wait and try again.</div>
                            </div>
                        )
                    }

                </>
            )}
        </div>
    );
};

export default UserFavoritesComponent;

// });

// fetch event details for all liked Ticketmaster events
// const ticketMasterPromises = currentUser.likedTicketmasterEvents.map(
//     (eventId) => {
//         return dispatch(searchEventDetailThunk({ e_id: eventId }))
//             .then((response) => {
//                 return {
//                     eventId,
//                     eventDetails: response.payload,
//                 };
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }
// );
