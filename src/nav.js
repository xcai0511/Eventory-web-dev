import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useLocation} from "react-router";
import React from "react";
import $ from "jquery";
import "bootstrap/js/dist/dropdown";

function Nav() {
    // const currentUser = useSelector((state) => state.auth.currentUser);
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = (paths[2]) ? paths[2] : 'about';

    React.useEffect(() => {
        const dropdownMenu = document.getElementById('userDropdown');
        dropdownMenu.addEventListener('click', function(event) {
            event.stopPropagation();
            $('.dropdown-menu').toggleClass('show');
        });
        document.addEventListener('click', function(event) {
            $('.dropdown-menu').removeClass('show');
        });
    }, []);

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="/images/eventory-logo-text-only.png" alt="Eventory Event Management" width="100"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navigation-bar" aria-controls="navigation-bar" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navigation-bar">
                    <ul className="navbar-nav mx-auto">
                        <Link to="/eventory/about/" className={`nav-item text-decoration-none ms-lg-5 me-4
                            ${active === 'about'?'active':''}`}>
                            <div className="nav-link">About</div>
                        </Link>
                        <Link to="/eventory/exclusives/" className={`nav-item text-decoration-none ms-lg-2 me-4
                            ${active === 'exclusives'?'active':''}`}>
                            <div className="nav-link">Eventory Exclusives</div>
                        </Link>
                        <Link to="/eventory/contact/" className={`nav-item text-decoration-none ms-lg-2 me-4
                            ${active === 'contact'?'active':''}`}>
                            <div className="nav-link">Contact</div>
                        </Link>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <Link to="/eventory/signin/" className={`nav-item text-decoration-none
                            ${active === 'signin'?'active':''}`}>
                            <div className="nav-link">Log in</div>
                        </Link>
                        <Link to="/eventory/signup/" className={`nav-item text-decoration-none
                            ${active === 'signup'?'active':''}`}>
                            <div className="nav-link">Sign up</div>
                        </Link>
                    </ul>
                    <div className="navbar-nav ms-auto">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" id="userDropdown"
                               role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/images/organizer-avatar.png" alt="User Profile Image"
                                     className="eventory-avatar me-2" width="40"></img>
                                <span className="d-none d-md-inline-block">Jaime Si</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                <Link to="/eventory/profile" className="text-decoration-none"><div className="dropdown-item">My Account</div></Link>
                                <Link to="/eventory/logout" className="text-decoration-none"><div className="dropdown-item">Logout</div></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;