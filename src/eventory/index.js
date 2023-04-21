import Nav from "../nav";
import {Provider, useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Signup from './signup';
import Signin from "./signin";
import OrganizerDashboard from "./organizer-dashboard";
import React, {useEffect} from "react";
import {profileThunk} from "../services/auth-thunks";
import CreateEventForm from "./organizer-create-event";
// import HomeComponent from "./user-home-page";
import HomeComponent from "./home"; // TODO: Check
import EditEventForm from "./organizer-edit-event";
import AboutComponent from "./about";
import AdminDashboard from "./admin-dashboard";
import ViewAttendeesList from "./organizer-view-attendees";
import Profile from './profile';
import ticketmasterEventReducer from "../reducers/ticketmaster-event-reducer";
import eventoryEventReducer from "../reducers/eventory-event-reducer";
import authReducer from "../reducers/auth-reducer";
import usersReducer from "../reducers/users-reducer";
import SearchResult from "../search-events";
import PublicProfilePages from "./public-profile-pages";

// import Nav from "../nav";
// import {Provider, useSelector} from "react-redux";
// import {configureStore} from "@reduxjs/toolkit";
// import Signup from './signup';
// import Signin from './signin/';
// import Search from './search';
// import Profile from './profile';
// import ticketmasterEventReducer from "../reducers/ticketmaster-event-reducer";
// import eventoryEventReducer from "../reducers/eventory-event-reducer";
// import {Route, Routes} from "react-router-dom";
// import Home from "./home";
// import authReducer from "../reducers/auth-reducer";
// import usersReducer from "../reducers/users-reducer";
// import SearchResult from "../search-events";
// import React, {useEffect, useState} from "react";

// const store = configureStore(
//     {reducer: {result: ticketmasterEventReducer, event: eventoryEventReducer, user: usersReducer, auth: authReducer}});

function Eventory() {

    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // const currentUser = useSelector((state) => state.auth.currentUser);

    useEffect(() => {
        try{
            dispatch(profileThunk());
        } catch (error) {
            alert(error.message);
        }
    }, [dispatch]);

    let homeComponent = <HomeComponent />;
    if (currentUser) {
        switch (currentUser.role) {
            case "user":
                homeComponent = <HomeComponent />;
                break;
            case "organizer":
                homeComponent = <OrganizerDashboard />;
                break;
            case "admin":
                homeComponent = <AdminDashboard />;
                break;
            default:
                homeComponent = <HomeComponent />;
        }
    }

    return(
        <div>
            <Nav />
            <Routes>
                <Route index element={homeComponent}/>
                <Route path="home" element={homeComponent} />
                <Route path="create-event" element={<CreateEventForm />} />
                <Route path="edit-event/:eventId" element={<EditEventForm />} />
                <Route path="about" element={<AboutComponent />} />
                {/*<Route path="faq" element={<FAQComponent />} />*/}
                <Route path="view-attendees/*" element={<ViewAttendeesList />}/>
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="profile/*" element={<Profile />} />
                <Route path="results/*" element={<SearchResult/>}/>
                <Route path="public-profile/*" element={<PublicProfilePages/>}/>
            </Routes>
        </div>
        // <Provider store={store}>
        //     <Nav/>
        //     <Routes>
        //         <Route index element={<Home />} />
        //         <Route path="home" element={<Home />} />
        //         <Route path="signup" element={<Signup />} />
        //         <Route path="signin" element={<Signin />} />
        //         <Route path="profile/*" element={<Profile />} />
        //         <Route path="results/*" element={<SearchResult/>}/>
        //     </Routes>
        //
        // </Provider>
    );
}
export default Eventory;