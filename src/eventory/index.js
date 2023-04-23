import Nav from '../nav';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Signup from './signup';
import Signin from './signin';
import OrganizerDashboard from './organizer-dashboard';
import React, { useEffect } from 'react';
import { profileThunk } from '../services/auth-thunks';
import CreateEventForm from './organizer-create-event';
// import HomeComponent from "./user-home-page";
import HomeComponent from './home'; // TODO: Check
import EditEventForm from './organizer-edit-event';
import AboutComponent from './about';
import AdminDashboard from './admin-dashboard';
import ViewAttendeesList from './organizer-view-attendees';
import Profile from './profile';
import SearchResult from '../search-events';
import OrganizerSignup from './signup/organizer-signup';
import FAQComponent from './faq';
import AdminManageUsersPage from './admin-manage-users';
import AdminManageOrganizersPage from './admin-manage-organizers';
import PublicProfilePages from './public-profile-pages';

function Eventory() {
    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // const currentUser = useSelector((state) => state.auth.currentUser);

    useEffect(() => {
        try {
            dispatch(profileThunk());
        } catch (error) {
            alert(error.message);
        }
    }, [dispatch]);

    let homeComponent = <HomeComponent />;
    if (currentUser) {
        switch (currentUser.role) {
            case 'user':
                homeComponent = <HomeComponent />;
                break;
            case 'organizer':
                homeComponent = <OrganizerDashboard />;
                break;
            case 'admin':
                homeComponent = <AdminDashboard />;
                break;
            default:
                homeComponent = <HomeComponent />;
        }
    }

    return (
        <div className="container-fluid">
            <Nav />
            <Routes>
                <Route index element={homeComponent} />
                <Route path="home" element={homeComponent} />
                <Route path="create-event" element={<CreateEventForm />} />
                <Route path="edit-event/:eventId" element={<EditEventForm />} />
                <Route path="about" element={<AboutComponent />} />
                <Route path="faq" element={<FAQComponent />} />
                <Route path="view-attendees/*" element={<ViewAttendeesList />} />
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="organizer-signup" element={<OrganizerSignup />} />
                <Route path="profile/*" element={<Profile />} />
                <Route path="results/*" element={<SearchResult />} />
                <Route path="manage-users" element={<AdminManageUsersPage />} />
                <Route path="manage-organizers" element={<AdminManageOrganizersPage />} />
                <Route path="public-profile/*" element={<PublicProfilePages />} />
            </Routes>
        </div>
    );
}
export default Eventory;
