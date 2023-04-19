import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DetailItem from "./detail-item";
import {useLocation} from "react-router";
import {searchEventDetailThunk} from "../../services/ticketmaster-thunks";
import "./detail.css";

const TicketmasterEventDetail = () => {
    const dispatch = useDispatch();
    const link = useLocation();
    const queryParams = new URLSearchParams(link.search);
    const e_id = queryParams.get("id");
    useEffect(() => {
        dispatch(searchEventDetailThunk({e_id}))
    }, []);

    let {detail,result, loading} = useSelector((state) => state.result);
    let resultArray = [];
    resultArray[0] = detail;
    console.log(resultArray);

    return (
        <>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading &&
                resultArray.map(detail =>
                    <DetailItem
                        key={detail._id}
                        detail={detail}/>)
            }
        </>
    );

};

export default TicketmasterEventDetail;

