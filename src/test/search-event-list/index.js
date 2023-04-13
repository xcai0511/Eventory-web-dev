import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {eventThunk} from "../../services/event-thunks";
import EventItem from "./event-item";

const EventList = () => {
    const eventArray = useSelector(
        (state) => state.result);

    const {result, loading} = useSelector(state => state.result)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(eventThunk())
    }, [])

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
                    <EventItem
                        key={result._id}
                        result={result}/>
                )
            }
        </ul>
    );
};

export default EventList;