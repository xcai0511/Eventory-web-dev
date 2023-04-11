import React from "react";
import ResultItem from "./result-item";
import {useSelector} from "react-redux";

const ResultList = () => {
    const resultArray = useSelector(
        (state) => state.result);

    return(
        <ul className="list-group">
            {
                resultArray.map(result =>
                    <ResultItem
                        key={result._id}
                        result={result}/>
                )
            }
        </ul>
    );
};

export default ResultList;