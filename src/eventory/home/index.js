import HeaderSearchBar from "../../search-events/header-search-bar";
import AnonymousEventCard from "../../search-events/anonymous-event-card";
import React from "react";
import Footer from "../footer";

function HomeComponent() {
    return (
        <>
            <HeaderSearchBar/>
            <AnonymousEventCard/>
            <Footer />
        </>

    );
}
export default HomeComponent;