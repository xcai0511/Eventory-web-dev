import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // import configureStore
import { Provider } from 'react-redux'; // import the Provider component

import userReducer from '../../reducers/users-reducer';
import authReducer from '../../reducers/auth-reducer';

import NavSidebar from './nav-sidebar';
import PublicProfileComponent from './public-profile';
import UserFavoritesComponent from './user-favorites';
import UserReviewsComponent from './user-reviews';
import AccountSecurityComponent from './account-security';

const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
    },
});

const Profile = () => {
    return (
        // <Provider store={store}>
        <div className=" mx-auto ">
            <div className="row mt-3">
                <div className="col-3 d-flex flex-column align-items-center justify-content-top ">
                    <NavSidebar active="profile" />
                </div>
                <div className="col-9 pe-4 border-start">
                    <Routes>
                        <Route path="/" element={<PublicProfileComponent />} />
                        <Route path="/favorites" element={<UserFavoritesComponent />} />
                        <Route path="/reviews" element={<UserReviewsComponent />} />
                        <Route
                            path="/account-security"
                            element={<AccountSecurityComponent />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
        // </Provider>
    );
};

export default Profile;
