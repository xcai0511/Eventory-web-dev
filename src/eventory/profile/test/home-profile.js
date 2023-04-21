import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const ProfileHomeComponent = ({ setIsEditingProfile }) => {
    // get tuits from the state in the store
    const profile = useSelector((state) => state.profile);
    const editProfileClickHandler = () => {
        setIsEditingProfile(true);
    };

    return (
        <div className="container">
            <div className="row ps-4">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="container mt-4">
                        {/* <!------------ avatar & button & info -------> */}
                        <div className="row w-75">
                            {/* <!-- Upper banner and avatar --> */}
                            <div className="position-relative">
                                <div className="d-flex justify-content-center mt-2">
                                    <img
                                        src="../../images/background.jpg"
                                        className="img-fluid profile-banner"
                                    />
                                    <img
                                        src="../../images/monica.jpg"
                                        className="position-absolute rounded-circle profile-icon-160px"
                                        style="
                                        bottom: 60px;
                                        left: 50%;
                                        transform: translateX(-50%);
                                    "
                                    />
                                </div>
                            </div>
                            <div className="col-3 d-flex flex-column align-items-center justify-content-top mt-3">
                                {/* <!------------ Navbar -----------> */}
                                <div className="list-group">
                                    <a className="list-group-item active">
                                        Public Profile
                                    </a>
                                    <a className="list-group-item">Followings</a>
                                    <a className="list-group-item">Favorites</a>
                                    <a className="list-group-item">Reviews</a>
                                    <a className="list-group-item">Account Security</a>
                                </div>
                            </div>
                            <div className="col-9 pe-4">
                                {/* <!--------- Account Info ---------> */}
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="h3 fw-bold">Monica Geller</div>
                                    {/* <!-- button to change profile --> */}
                                    <div>
                                        <button className="btn btn-primary rounded-pill float-end bg-black text-white">
                                            Edit Profile
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    Music lover and enjoy attending concerts and
                                    festivals. Looking forward to meeting new people who
                                    share my interests and discovering new artists
                                </div>
                                <div className="me-3 mt-2">
                                    <span>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span className="ms-1">Boston, MA</span>
                                    </span>
                                    <span className="ms-3">
                                        <i className="fa-solid fa-cake-candles"></i>
                                        <span className="ms-1">
                                            Born November 21, 1987
                                        </span>
                                    </span>
                                    <span className="ms-3">
                                        <i className="fa-regular fa-calendar-days"></i>
                                        <span className="ms-1">Joined April 2009</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
};
export default ProfileHomeComponent;
