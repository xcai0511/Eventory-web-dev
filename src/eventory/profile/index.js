import React, { useState } from 'react';
import { Routes, Route } from 'react-router';

import NavSidebar from './nav-sidebar';
import PublicProfileComponent from './public-profile';
import UserFavoritesComponent from './user-favorites';
import AccountSecurityComponent from './account-security';


const Profile = () => {
    return (
        // <Provider store={store}>
        <div className=" mx-auto container ">
            <div className="row mt-3">
                <div className="col-3 d-flex flex-column align-items-center justify-content-top ">
                    <NavSidebar active="profile" />
                </div>
                <div className="col-9 pe-4 border-start">
                    <Routes>
                        <Route path="/" element={<PublicProfileComponent />} />
                        <Route path="/favorites" element={<UserFavoritesComponent />} />
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
