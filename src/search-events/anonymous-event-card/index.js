import React, {useEffect} from "react";
import EventCardItem from "./event-card-item";
import {useDispatch, useSelector} from "react-redux";
import {searchThunk} from "../../services/ticketmaster-thunks";
import {CardGroup} from "react-bootstrap";

const AnonymousEventCard = () => {
    const {result, loading} = useSelector(state => state.result)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchThunk())
    }, []);
    const resultArray = result.slice(0, 5);
    console.log(resultArray);
    return (
        <>
            <h3 className="fw-bold ms-2 mt-3">Suggested Events</h3>
            <div style={{ overflow: 'scroll' }}>
                <CardGroup className="mt-2">
                    {
                        !loading &&
                        resultArray.map(result =>
                            <EventCardItem
                                key={result._id}
                                result={result}/>)
                    }
                </CardGroup>
            </div>

        </>

    );
};
export default AnonymousEventCard;