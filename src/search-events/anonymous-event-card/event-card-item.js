import React from "react";
import "./event-card.css";
import Card from 'react-bootstrap/Card'
import {useNavigate} from "react-router-dom";
import {searchEventDetailThunk} from "../../services/ticketmaster-thunks";
import {useDispatch} from "react-redux";

const EventCardItem = ({result}) => {
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
        <Card className="ms-2 me-2" onClick={cardOnclickHandler}>
            <Card.Img variant="top" src={result.image} className="wd-eventcard-img"/>
            <Card.Body>
                <Card.Title>
                    {result.name}
                </Card.Title>
            </Card.Body>
        </Card>
    );
};
export default EventCardItem;