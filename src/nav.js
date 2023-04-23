import {Link, NavLink} from "react-router-dom";
import React, {useState} from "react";
import "./eventory/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {logOutThunk} from "./services/auth-thunks";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router";

function Nav() {

    const [isHomeClicked, setIsHomeClicked] = useState(false);

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
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

    function homeOnClickHandler() {
        setIsHomeClicked(true);
        navigate('/home')
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div onClick={homeOnClickHandler} style={{ cursor: "pointer" }}>
                    <a className="navbar-brand">
                        <img src="/images/eventory-logo-text-only.png" alt="Eventory Event Management" width="100" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navigation-bar" aria-controls="navigation-bar" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navigation-bar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <div onClick={homeOnClickHandler} className={`nav-link${location.pathname === '/home' || isHomeClicked ? ' active' : ''}`}
                                 style={{ cursor: "pointer", fontWeight: 600}}>
                                Home
                            </div>
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
