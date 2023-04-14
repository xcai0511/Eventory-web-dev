import React from "react";
import {useSelector} from "react-redux";
import DetailItem from "./detail-item";
import detailArray from "./detail.json";

const EventDetail = () => {
    return (
        detailArray.map(detail =>
            <DetailItem
                key={detail._id}
                detail={detail}/>)
    );

};

export default EventDetail;

