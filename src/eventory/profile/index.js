import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useNavigate } from 'react-router-dom';
import NavSidebar from './nav-sidebar';
import PublicProfileComponent from './public-profile';
import UserFavoritesComponent from './user-favorites';
import AccountSecurityComponent from './account-security';

const Profile = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/signin');
        }
    }, []);

    // if (currentUser === null) {
    //     return null;
    // }

    if (currentUser) {
        return (
            <div className=" mx-auto container mb-4">
                {(currentUser.role !== "user") ? <h3 className="mt-4 ms-4">Unauthorized.</h3> :
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
                }
            </div>
        );
    }
};

export default Profile;
