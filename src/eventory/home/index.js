import HeaderSearchBar from "../../search-events/header-search-bar";
import AnonymousEventCard from "../../search-events/anonymous-event-card";
import React from "react";
import {useSelector} from "react-redux";

function Home() {
    const currentUser = useSelector((state) => state.auth.currentUser);
    console.log(currentUser);
    return (
        <>
            <HeaderSearchBar/>
            <AnonymousEventCard/>
        </>

    );
}
export default Home;