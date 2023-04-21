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
        console.log("searching all events");
    }, []);
    const resultArray = result.slice(0, 8);
    console.log(resultArray);
    return (
        <>
            <h3 className="fw-bold ms-2 mt-4 mb-4">Suggested Events</h3>
            <div>
                <CardGroup className="mt-2">
                    {
                        !loading &&
                        resultArray.map(result =>
                            <EventCardItem
                                key={result._id}
                                result={result}
                                colClass="col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-3"/>)
                    }
                </CardGroup>
            </div>

        </>

    );
};
export default AnonymousEventCard;