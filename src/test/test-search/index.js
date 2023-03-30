import React from "react";
import TestResultItem from "./result-item";
import {useSelector} from "react-redux";

const TestResultList = () => {
    const resultArray = useSelector(
        (state) => state.result);

    return(
        <ul className="list-group">
            {
                resultArray.map(result =>
                    <TestResultItem
                        key={result._id}
                        result={result}/>
                )
            }
        </ul>
    );
};

export default TestResultList;