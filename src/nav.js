import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import './eventory/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { logOutThunk } from './services/auth-thunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function Nav() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOutHandler = async () => {
        localStorage.removeItem('currentUser');
        await dispatch(logOutThunk());
        navigate('/home');
        window.location.reload();
    };

    let navBarDisplayName = '';
    if (currentUser) {
        switch (currentUser.role) {
            case 'user':
                navBarDisplayName = `${currentUser.firstName} ${currentUser.lastName}`;
                break;
            case 'organizer':
                navBarDisplayName = `${currentUser.name}`;
                break;
            case 'admin':
                navBarDisplayName = `${currentUser.firstName} ${currentUser.lastName}`;
                break;
            default:
                navBarDisplayName = '';
        }
    }

    let navBarDisplayImage = '';
    if (currentUser) {
        switch (currentUser.role) {
            case 'user':
                navBarDisplayImage = '/images/user-avatar-5.png';
                break;
            case 'organizer':
                navBarDisplayImage = '/images/organizer-avatar.png';
                break;
            case 'admin':
                navBarDisplayImage = '/images/admin-icon.png';
                break;
            default:
                navBarDisplayImage = '/images/user-avatar-5.png';
        }
    }

    return (
        <nav className="navbar navbar-expand-lg">
            {/* style={{ marginLeft: '-25px', marginRight: '-25px' }} */}
            <div className="container">
                <NavLink to="home">
                    <a className="navbar-brand" href="/">
                        <img
                            src="/images/eventory-logo-text-only.png"
                            alt="Eventory Event Management"
                            width="100"
                        />
                    </a>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navigation-bar"
                    aria-controls="navigation-bar"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navigation-bar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink to="home" className="nav-link fw-bold">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item ms-2">
                            <NavLink to="about" className="nav-link fw-bold">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item ms-2">
                            <NavLink to="faq" className="nav-link fw-bold">
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                    {!currentUser && (
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to="signin" className="nav-link">
                                    Log in
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="signup" className="nav-link">
                                    Sign up
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    {currentUser && (
                        <div className="navbar-nav ms-auto">
                            <div className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle d-flex align-items-center"
                                    id="userDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img
                                        src={navBarDisplayImage}
                                        alt="User Profile Image"
                                        className="eventory-avatar me-2"
                                        width="40"></img>
                                    <span className="d-none d-md-inline-block">
                                        {navBarDisplayName}
                                    </span>
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="userDropdown">
                                    {currentUser.role === 'user' && (
                                        <li>
                                            <NavLink
                                                to="profile"
                                                className="dropdown-item">
                                                My Account
                                            </NavLink>
                                        </li>
                                    )}
                                    <li>
                                        <Link
                                            onClick={logOutHandler}
                                            className="dropdown-item">
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
