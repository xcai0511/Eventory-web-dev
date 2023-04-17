import React from "react";
import resultReducer from "./search-result-list/result-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import "./index.css";
import eventReducer from "./search-event-list/event-reducer";
import SearchPage from "./search-page";
import {Route, Routes} from "react-router";
import EventDetail from "./event-detail";

const store = configureStore(
    {reducer: {result: resultReducer, event: eventReducer}});
function SearchResult() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/*" element={<SearchPage/>}/>
                <Route path="/detail/*" element={<EventDetail/>}/>
            </Routes>
        </Provider>
    )
}
export default SearchResult;
