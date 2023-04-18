import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import EventoryResultItem from "./event-item";
import {eventFilterThunk} from "../../services/event-thunks";

const EventoryResultList = () => {

    const {result, loading} = useSelector(state => state.event)
    console.log(result);
    const dispatch = useDispatch();
    const link = useLocation();
    const queryParams = new URLSearchParams(link.search);
    const city = queryParams.get("city");
    const keyword = queryParams.get("keyword");
    useEffect(() => {
        dispatch(eventFilterThunk({city, keyword}))
    }, []);

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                result.map(result =>
                    <EventoryResultItem
                        key={result._id}
                        event={result}/>
                )
            }
        </ul>
    );
};

export default EventoryResultList;