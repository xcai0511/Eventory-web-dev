
import Nav from "../nav";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import Signup from './signup';
import Signin from './signin/';
import Search from './search';
import Profile from './profile';
import ticketmasterEventReducer from "../search-events/reducers/ticketmaster-event-reducer";
import eventoryEventReducer from "../search-events/reducers/eventory-event-reducer";
import {Route, Routes} from "react-router-dom";
import Home from "./home";
import authReducer from "../reducers/auth-reducer";
import usersReducer from "../reducers/users-reducer";
import SearchResult from "../search-events";
import React from "react";

const store = configureStore(
    {reducer: {result: ticketmasterEventReducer, event: eventoryEventReducer, user: usersReducer, auth: authReducer}});

function Eventory() {
    return(
        <Provider store={store}>
            <Nav/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
                <Route path="profile/*" element={<Profile />} />
                <Route path="results/*" element={<SearchResult/>}/>
            </Routes>
        </Provider>
    );
}
export default Eventory;
//
// /*
// import { Routes, Route } from 'react-router';
// import Nav from '../nav';
// import Home from './home';

// // import UserProfile from './profile/test';
// import userReducer from '../reducers/users-reducer';
// import authReducer from '../reducers/auth-reducer';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
//
//
// const store = configureStore({
//     reducer: {
//         user: userReducer,
//         auth: authReducer,
//     },
// });
//
// function Eventory() {
//     return (
//         <Provider store={store}>
//             <Nav />
//             <Routes>
//                 <Route index element={<Home />} />
//                 <Route path="home" element={<Home />} />
//                 <Route path="signup" element={<Signup />} />
//                 <Route path="signin" element={<Signin />} />
//                 <Route path="search" element={<Search />} />
//                 <Route path="profile/*" element={<Profile />} />
//                 {/* <Route path="profile" element={<UserProfile />} /> */}
//             // </Routes>
// */
