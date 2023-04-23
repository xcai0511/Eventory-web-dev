import HeaderSearchBar from '../../search-events/header-search-bar';
import AnonymousEventCard from '../../search-events/anonymous-event-card';
import React from 'react';
import Footer from '../footer';
import UsersHomeLikedEvents from '../users-home-liked-events';
import { useSelector } from 'react-redux';


function HomeComponent() {
    const currentUser = useSelector((state) => state.auth.currentUser);
    console.log("home/index.js " + JSON.stringify(currentUser));
    return (
        <div>
            <HeaderSearchBar />
            {currentUser && <UsersHomeLikedEvents />}
            <AnonymousEventCard/>
            <Footer />
        </div>
    );
}
export default HomeComponent;
