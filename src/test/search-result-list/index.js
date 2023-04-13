import React, {useEffect} from "react";
import ResultItem from "./result-item";
import {useDispatch, useSelector} from "react-redux";
import {searchThunk} from "../../services/search-thunks";

const ResultList = () => {

    const {result, loading} = useSelector(state => state.result)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchThunk())
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
                    <ResultItem
                        key={result._id}
                        result={result}/>
                )
            }
        </ul>
    );
};

export default ResultList;