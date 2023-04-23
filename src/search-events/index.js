import React from "react";
import "./index.css";
import SearchPage from "./search-result-page";
import {Route, Routes} from "react-router";
import TicketmasterEventDetail from "./ticketmaster-event-detail";
import EventoryEventDetail from "./eventory-event-detail";

function SearchResult() {
    return (
        <Routes>
            <Route path="/*" element={<SearchPage/>}/>
            <Route path="/tm/detail/*" element={<TicketmasterEventDetail/>}/>
            <Route path="/ev/detail/*" element={<EventoryEventDetail/>}/>
        </Routes>
    )
};

export default SearchResult;
