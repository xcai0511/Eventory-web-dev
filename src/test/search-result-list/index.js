import React, {useEffect} from "react";
import ResultItem from "./result-item";
import {useDispatch, useSelector} from "react-redux";
import {searchFilterThunk, searchThunk} from "../../services/search-thunks";
import {useLocation} from "react-router";

const ResultList = () => {

    const {result, loading} = useSelector(state => state.result)
    const dispatch = useDispatch();

    const link = useLocation();
    const queryParams = new URLSearchParams(link.search);
    const location = queryParams.get("city");
    const keyword = queryParams.get("keyword");
    useEffect(() => {
        dispatch(searchFilterThunk({location, keyword}))
    }, []);


    return(
        <ul className="list-group">
            {
                result.length === 0 &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading &&
                result.map(result =>
                    <ResultItem
                        key={result._id}
                        result={result}/>)
            }
        </ul>
    );
};

export default ResultList;