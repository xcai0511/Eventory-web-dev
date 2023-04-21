import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TicketmasterDetailItem from "./ticketmaster-detail-item";
import {useLocation} from "react-router";
import {searchEventDetailThunk} from "../../services/ticketmaster-thunks";
import "./detail.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    if (detail === "Exceeded Ticketmaster API rate limit. Please wait and try again.") {
        loading = !loading
    }
    resultArray[0] = detail;
    console.log(resultArray);


    return (
        <>
            {
                loading &&
                <div>Exceeded Ticketmaster API rate limit. Please wait and try again.</div>
            }
            {
                !loading &&
                resultArray.map(detail =>
                    <TicketmasterDetailItem
                        key={detail._id}
                        detail={detail}/>)
            }
        </>
    );

};

export default TicketmasterEventDetail;

