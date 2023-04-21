import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const NavSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    // const active = paths[2];
    const active = paths[2] ? paths[2] : 'profile';

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // const currentUser = useSelector((state) => state.auth.currentUser); // add this line to get the currentUser from Redux store
    return (
        <div className="profile-sidebar list-group">
            <div className="h4 mb-4 fw-bold">Welcome {currentUser.firstName}</div>
            <Link
                to="/profile"
                className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                <span>Public Profile</span>
            </Link>
            <Link
                to="/profile/favorites"
                className={`list-group-item ${active === 'favorites' ? 'active' : ''}`}>
                <span>My Favorites</span>
            </Link>
            <Link
                to="/profile/account-security"
                className={`list-group-item ${
                    active === 'account-security' ? 'active' : ''
                }`}>
                <span>Account Security</span>
            </Link>
            <div className="mt-4 list-group-item">
                PRIVACY
                <div className="row mt-2">
                    <div className="col-2 fs-14px">
                        <FontAwesomeIcon
                            icon={icon({
                                name: 'lock',
                                style: 'solid',
                            })}
                            className="ms-2"
                        />
                    </div>
                    <div className="col-9 fs-14px">
                        <div>Your information is always private and secure.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavSidebar;
