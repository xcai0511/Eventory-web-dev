import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isCurrentUserRoleUser} from "../../utils/utils";
import "../index.css";
import {eventIdThunk} from "../../services/eventory-thunks";
import UsersHomeLikedEventComponent from "./users-home-liked-event-component";
import {profileThunk} from "../../services/auth-thunks";

const UsersHomeLikedEvents = () => {

    const currentUser = useSelector((state) => state.auth.currentUser);
    isCurrentUserRoleUser(currentUser);

    const [likedEventoryEventList, setLikedEventoryEventList] = useState({});

    const dispatch = useDispatch();
    useEffect( () => {
        const fetchLikedEventoryEvents = async () => {
            await dispatch(profileThunk());
            const newLikedEventoryList = {};
            for (const eventId of currentUser.likedEvents) {
                try {
                    const response = await dispatch(eventIdThunk({ eventId }));
                    newLikedEventoryList[eventId] = response.payload;
                } catch (error) {
                    console.log(error);
                }
            }
            setLikedEventoryEventList(newLikedEventoryList);
        }
        console.log("UsersHomeLikedEvents useEffect");
        fetchLikedEventoryEvents();
    }, []);

    if (currentUser.likedEvents.length === 0) {
        return (
            <>
                <h3 className="fw-bold ms-2 mt-4 mb-3">Your Liked Eventory Events</h3>
                <p className="ms-2">No liked events.</p>
            </>
        )
    }

    return(
        <>
            <h3 className="fw-bold ms-2 mt-4 mb-3">Your Liked Eventory Events</h3>
            <div className="row">
                {currentUser.likedEvents.map((eventoryEvent) => (
                    <UsersHomeLikedEventComponent
                        key={eventoryEvent}
                        eventoryEvent={likedEventoryEventList[eventoryEvent]} />
                ))}
            </div>
        </>
    )
};

export default UsersHomeLikedEvents;