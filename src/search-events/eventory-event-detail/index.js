import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {eventIdThunk} from "../../services/eventory-thunks";
import EventoryDetailItem from "./eventory-detail-item";

const EventoryEventDetail = () => {
    const dispatch = useDispatch();
    const link = useLocation();
    const queryParams = new URLSearchParams(link.search);
    const eventId = queryParams.get("id");

    useEffect(() => {
        dispatch(eventIdThunk({eventId}))
    }, []);

    let {detail, result, loading} = useSelector((state) => state.usersEvent);
    let detailArray = [];
    detailArray[0] = detail;

    return(
        <>
            {
                loading &&
                <div>Loading...</div>
            }
            {
                !loading &&
                detailArray.map(detail =>
                    <EventoryDetailItem
                        key={detail._id}
                        detail={detail}/>)
            }
        </>
    );
};

export default EventoryEventDetail;