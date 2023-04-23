import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import './public-user-profile.css';
import { profileThunk } from '../../../services/auth-thunks';
import { eventIdThunk } from '../../../services/eventory-thunks';
import { searchEventDetailThunk } from '../../../services/ticketmaster-thunks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import EventCardComponent from '../../profile/user-favorites/fav-exclusive-card';
import TicketMasterCardComponent from '../../profile/user-favorites/fav-ticketmaster-card';

const PublicUserProfileComponent = ({ userProfile }) => {
    console.log('PublicUserProfileComponent');
    console.log(JSON.stringify(userProfile));

    const [exclusiveEventList, setExclusiveEventList] = useState({});
    const [ticketMasterEventList, setTicketMasterEventList] = useState({});
    const [errorEvents, setErrorEvents] = useState(new Set());
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(
            'PublicUserProfileComponent---- use Effect' + JSON.stringify(userProfile)
        );
        dispatch(profileThunk());

        // fetch event details for all liked events
        const fetchEventDetails = async () => {
            // exclusive events
            const newExclusiveEventList = {};
            for (const eventId of userProfile.likedEvents) {
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
            for (const eventId of userProfile.likedTicketmasterEvents) {
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
    }, [dispatch]);

    if (!userProfile) {
        return <div className="container">No user found.</div>;
    }

    return (
        <div className="mt-2">
            <div className="row mt-2">
                {/*User Info Component*/}
                <div className="col-12 col-lg-3 rounded-1 pb-3">
                    <div className="d-flex justify-content-center mt-3">
                        <img
                            src="../../images/user-avatar-1.png"
                            alt="temp-avatar"
                            className="rounded-pill public-user-profile-avatar"
                        />
                    </div>
                    <div className="h4 fw-bold mt-3 justify-content-center d-flex">
                        {userProfile.firstName} {userProfile.lastName}
                    </div>
                    <div className="mt-1 border-top">
                        <div className="mt-2 row ms-3">
                            <div className="col-1">
                                <FontAwesomeIcon
                                    icon={icon({ name: 'location-dot', style: 'solid' })}
                                />
                            </div>
                            <div className="col-9">
                                {/*<span className="fw-bold">Location: </span>*/}
                                {userProfile.location ? (
                                    <span className="">{userProfile.location}</span>
                                ) : (
                                    <span className="">unknown</span>
                                )}
                            </div>
                        </div>
                        <div className="mt-2 row ms-3">
                            <div className="col-1">
                                <FontAwesomeIcon
                                    icon={icon({ name: 'circle-info', style: 'solid' })}
                                />
                            </div>
                            <div className="col-9">
                                {/*<span className="fw-bold">Bio: </span>*/}
                                {userProfile.bio ? (
                                    <span className="">{userProfile.bio}</span>
                                ) : (
                                    <span className="">No Bio</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/*User Favorite Event*/}
                <div className="col-12 col-lg-8 mt-3">
                    {/* title */}
                    <div className="pb-1 mb-2">
                        <span className="h4 me-2 fw-bold">Favorite Events</span>
                    </div>
                    {/* content: exclusive events */}
                    {userProfile.likedEvents.length === 0 &&
                    userProfile.likedTicketmasterEvents.length === 0 ? (
                        <div className="mt-4">No favorites yet</div>
                    ) : (
                        <>
                            {/* exclusive */}
                            <div className="card-columns">
                                {userProfile.likedEvents.map((eventId) => (
                                    <EventCardComponent
                                        key={eventId}
                                        event={exclusiveEventList[eventId]}
                                    />
                                ))}
                            </div>
                            {/* Ticketmaster */}

                            <div className="card-columns">
                                {userProfile.likedTicketmasterEvents
                                    .filter((eventId) => !errorEvents.has(eventId))
                                    .map((eventId) => (
                                        <TicketMasterCardComponent
                                            key={eventId}
                                            event={ticketMasterEventList[eventId]}
                                        />
                                    ))}
                            </div>
                            {errorEvents.size > 0 && (
                                <div className="error-card ps-2 pe-2">
                                    <h5>
                                        Oops! Some of the liked events couldn't be
                                        displayed right now due to API limits.
                                    </h5>
                                    <p>
                                        Please try again later or refresh the page to see
                                        if they show up. Thank you for your patience!
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default PublicUserProfileComponent;
