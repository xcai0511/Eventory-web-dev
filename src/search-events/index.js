import React from "react";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import "./index.css";
import SearchPage from "./search-result-page";
import {Route, Routes} from "react-router";
import EventDetail from "./ticketmaster-event-detail";
import eventoryEventReducer from "./reducers/eventory-event-reducer";
import ticketmasterEventReducer from "./reducers/ticketmaster-event-reducer";

const store = configureStore(
    {reducer: {result: ticketmasterEventReducer, event: eventoryEventReducer}});
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
