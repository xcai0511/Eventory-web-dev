import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import EventoryResultItem from "./event-item";
import {eventFilterThunk} from "../../services/eventory-thunks";

const EventoryResultList = () => {

    let {result, detail, loading} = useSelector(state => state.event)
    console.log(result);
    console.log(detail);
    const dispatch = useDispatch();
    const link = useLocation();
    const queryParams = new URLSearchParams(link.search);
    const location = queryParams.get("city");
    const keyword = queryParams.get("keyword");
    useEffect(() => {
        dispatch(eventFilterThunk({location, keyword}))
    }, []);

    const type = queryParams.get("type");

    if (type === "General Events") {
        result = [];
    }

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