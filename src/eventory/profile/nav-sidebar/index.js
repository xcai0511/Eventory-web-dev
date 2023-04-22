import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {isCurrentUser} from "../../../utils/utils";

const NavSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    // const active = paths[2];
    const active = paths[2] ? paths[2] : 'profile';

    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));


    // const currentUser = useSelector((state) => state.auth.currentUser); // add this line to get the currentUser from Redux store
    // Check if there is a current user

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    isCurrentUser(currentUser);
    // const currentUser = useSelector((state) => state.auth.currentUser); // add this line to get the currentUser from Redux store
    return (
        <div className="profile-sidebar list-group">
            <div className="h4 mb-4 fw-bold d-none d-md-block">Welcome {currentUser.firstName}</div>
            <Link
                to="/profile"
                className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                <FontAwesomeIcon
                    icon={icon({
                        name: 'user',
                        style: 'solid',
                    })}
                    className="d-lg-none"
                />
                <span className="d-none d-lg-block"> Profile</span>
            </Link>
            <Link
                to="/profile/favorites"
                className={`list-group-item ${active === 'favorites' ? 'active' : ''}`}>
                <FontAwesomeIcon
                    icon={icon({
                        name: 'heart',
                        style: 'solid',
                    })}
                    className="d-lg-none"
                />
                <span className="d-none d-lg-block">My Favorites</span>
            </Link>
            <Link
                to="/profile/account-security"
                className={`list-group-item ${
                    active === 'account-security' ? 'active' : ''
                }`}>
                <FontAwesomeIcon
                    icon={icon({
                        name: 'shield-halved',
                        style: 'solid',
                    })}
                    className="d-lg-none"
                />
                <span className="d-none d-lg-block">Account Security</span>
            </Link>
            <div className="mt-4 list-group-item d-none d-md-block">
                PRIVACY
                <div className="row mt-2">
                    <div className="d-none d-lg-block col-lg-2 fs-14px">
                        <FontAwesomeIcon
                            icon={icon({
                                name: 'lock',
                                style: 'solid',
                            })}
                            className="ms-2"
                        />
                    </div>
                    <div className="col-12 col-lg-9 fs-14px">
                        <div>Your information is always private and secure.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavSidebar;
