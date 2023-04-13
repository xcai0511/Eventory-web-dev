import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import React from "react";
import "./eventory/index.css";

function Nav() {
    const currentUser = useSelector((state) => state.auth.currentUser);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="/images/eventory-logo-text-only.png" alt="Eventory Event Management" width="100"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navigation-bar" aria-controls="navigation-bar" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navigation-bar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink to="/eventory/about" className="nav-link" activeClassName="active">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/eventory/exclusives" className="nav-link" activeClassName="active">
                                Eventory Exclusives
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/eventory/contact" className="nav-link" activeClassName="active">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    {!currentUser && <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/eventory/signin" className="nav-link" activeClassName="active">
                                Log in
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/eventory/signup" className="nav-link" activeClassName="active">
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
                                    <NavLink to="/eventory/profile" className="dropdown-item">
                                        My Account
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/eventory/logout" className="dropdown-item">
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
