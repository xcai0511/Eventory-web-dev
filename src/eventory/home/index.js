import HeaderSearchBar from "../../search-events/header-search-bar";
import AnonymousEventCard from "../../search-events/anonymous-event-card";
import React from "react";
import Footer from "../footer";
import UsersHomeLikedEvents from "../users-home-liked-events";

function HomeComponent() {
    return (
        <>
            <HeaderSearchBar/>
            <AnonymousEventCard/>
            <UsersHomeLikedEvents />
            <Footer />
        </>

    );
}
export default HomeComponent;