import React from "react";
import testReducer from "./test-search/test-result-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import TestResultList from "./test-search";
import "./index.css";

const store = configureStore(
    {reducer: {result: testReducer}});
function TestSearch() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-10"
                     style={{"position": "relative"}}>
                    <TestResultList/>
                </div>
                <div className="col-2">
                    <h1>Calendar</h1>
                </div>
            </div>
        </Provider>
    )
}
export default TestSearch;
