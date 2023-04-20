import React from "react";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import "./index.css";
import SearchPage from "./search-result-page";
import {Route, Routes} from "react-router";
import eventoryEventReducer from "../reducers/eventory-event-reducer";
import ticketmasterEventReducer from "../reducers/ticketmaster-event-reducer";
import TicketmasterEventDetail from "./ticketmaster-event-detail";
import EventoryEventDetail from "./eventory-event-detail";
import usersReducer from "../reducers/users-reducer";

const store = configureStore(
    {reducer: {result: ticketmasterEventReducer, event: eventoryEventReducer, user: usersReducer}});
function SearchResult() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/*" element={<SearchPage/>}/>
                <Route path="/tm/detail/*" element={<TicketmasterEventDetail/>}/>
                <Route path="/ev/detail/*" element={<EventoryEventDetail/>}/>
            </Routes>
        </Provider>
    )
}
export default SearchResult;
