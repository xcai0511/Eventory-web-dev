import Nav from "../nav";
import {Provider, useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../reducers/users-reducer";
import authReducer from "../reducers/auth-reducer";
import eventsReducer from "../reducers/organizerEvent-reducer";
import {Route, Routes} from "react-router-dom";
import Signin from "./signin";
import OrganizerDashboard from "./organizer-dashboard";
import React, {useEffect} from "react";
import {profileThunk} from "../services/auth-thunks";
import CreateEventForm from "./organizer-create-event";
import HomeComponent from "./user-home-page";
import EditEventForm from "./organizer-edit-event";

function Eventory() {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);

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
            // case "admin":
            //     homeComponent = <AdminDashboard />;
            //     break;
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
                {/*<Route path="about" element={<AboutComponent />} />*/}
                {/*<Route path="eventory-exclusives" element={<EventoryExclusivesComponent />} />*/}
                {/*<Route path="contact" element={<ContactComponent />} />*/}
                <Route path="signin" element={<Signin />} />
                {/*<Route path="signup" element={<Signup />} />*/}
            </Routes>
        </div>
    );
}
export default Eventory;
