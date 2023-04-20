import {NavLink} from "react-router-dom";
import React from "react";
import "./eventory/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Nav() {
    // const currentUser = useSelector((state) => state.auth.currentUser);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink to="home">
                    <a className="navbar-brand" href="/">
                        <img src="/images/eventory-logo-text-only.png" alt="Eventory Event Management" width="100" />
                    </a>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navigation-bar" aria-controls="navigation-bar" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navigation-bar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink to="about" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="eventory-exclusives" className="nav-link">
                                Eventory Exclusives
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contact" className="nav-link" activeClassName="active">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    {!currentUser && <ul className="navbar-nav ms-auto">
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
                    </ul>}
                    {currentUser && <div className="navbar-nav ms-auto">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" id="userDropdown"
                               role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/images/organizer-avatar.png" alt="User Profile Image"
                                     className="eventory-avatar me-2" width="40"></img>
                                <span className="d-none d-md-inline-block">Jaime Si</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                <li>
                                    <NavLink to="profile" className="dropdown-item">
                                        My Account
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="logout" className="dropdown-item">
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>}
                </div>
            </div>
        </nav>
    )
}

export default Nav;