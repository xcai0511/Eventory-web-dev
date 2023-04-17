import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import DetailItem from "./detail-item";
import {useLocation} from "react-router";
import {searchEventDetailThunk} from "../../services/search-thunks";

const EventDetail = () => {
    useEffect(() => {
        dispatch(searchEventDetailThunk({e_id}))
    }, []);

    const {result, loading} = useSelector(state => state.result);
    console.log(result);
    const resultArray = [result];
    const dispatch = useDispatch();
    const link = useLocation();
    const queryParams = new URLSearchParams(link.search);
    const e_id = queryParams.get("id");
    console.log(e_id);

    return (
        <ul className="list-group">
            {
                result.length === 0 &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading &&
                resultArray.map(result =>
                    <DetailItem
                        key={result._id}
                        detail={result}/>)
            }
        </ul>
    );

};

export default EventDetail;

