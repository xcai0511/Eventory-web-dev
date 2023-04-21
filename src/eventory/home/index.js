import HeaderSearchBar from "../../search-events/header-search-bar";
import AnonymousEventCard from "../../search-events/anonymous-event-card";
import React from "react";
import {useSelector} from "react-redux";
import Nav from "../../nav";

function Home() {
    return (
        <>
            {/*<Nav/>*/}
            <HeaderSearchBar/>
            <AnonymousEventCard/>
        </>

    );
}
export default Home;