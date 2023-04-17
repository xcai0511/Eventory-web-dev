import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import DetailItem from "./detail-item";
import detailArray from "./detail.json";
import {useLocation} from "react-router";
import {getTicketmasterEventDetails} from "../../services/event-service";
import {eventDetailThunk} from "../../services/event-thunks";

const EventDetail = () => {
    const dispatch = useDispatch();
    const link = useLocation();
    const queryParams = new URLSearchParams(link.search);
    const e_id = queryParams.get("id");
    console.log(e_id);
    useEffect(() => {
        dispatch(eventDetailThunk({e_id}))
    }, []);
    return (
        detailArray.map(detail =>
            <DetailItem
                key={detail._id}
                detail={detail}/>)
    );

};

export default EventDetail;

