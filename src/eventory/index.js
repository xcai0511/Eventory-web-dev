import Nav from "../nav";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import HeaderSearchBar from "../search-events/header-search-bar";
import AnonymousEventCard from "../search-events/anonymous-event-card";
import ticketmasterEventReducer from "../search-events/reducers/ticketmaster-event-reducer";
import eventoryEventReducer from "../search-events/reducers/eventory-event-reducer";

const store = configureStore(
    {reducer: {result: ticketmasterEventReducer, event: eventoryEventReducer}});

function Eventory() {
    return(
        <Provider store={store}>
            <Nav/>
            <HeaderSearchBar/>
            <AnonymousEventCard/>
        </Provider>
    );
}
export default Eventory;
