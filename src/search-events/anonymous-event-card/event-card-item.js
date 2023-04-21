import React from "react";
import "./event-card.css";
import {useNavigate} from "react-router-dom";
import {searchEventDetailThunk} from "../../services/ticketmaster-thunks";
import {useDispatch} from "react-redux";

const EventCardItem = ({result, colClass}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cardOnclickHandler = () => {
        const queryParams = new URLSearchParams({
            id: result._id,
        });
        navigate(`/results/tm/detail/search?${queryParams.toString()}`);
        dispatch(searchEventDetailThunk(result.id));
    };
    return (
        <div className={`${colClass} p-2`}>
            <div className="card" onClick={cardOnclickHandler}>
                <img className="card-img-top wd-eventcard-img" src={result.image}></img>
                <div className="card-title-overlay">{result.name}</div>
            </div>
        </div>
    );
};
export default EventCardItem;