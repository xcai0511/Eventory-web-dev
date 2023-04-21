import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const AdminDashboard = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);

    return(
        <div className="container mt-4">
            <div className="row">

                <div>
                    <h3>Welcome, {currentUser.firstName}.</h3>
                </div>

                <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-2">
                    <Link to="/about" className="text-decoration-none text-black">
                        <div className="card m-1 card-border-radius shadow-sm shadow-hover">
                            <div className="card-body d-flex align-items-center">
                                <img className="me-3" src="/images/admin-icon.png" width="80"></img>
                                <div>
                                    <p className="card-subtitle text-muted">Eventory Admins</p>
                                    <h1 className="card-title mb-0">4</h1>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-2">
                    <Link to="/manage-users" className="text-decoration-none text-black">
                        <div className="card m-1 card-border-radius shadow-sm shadow-hover">
                            <div className="card-body d-flex align-items-center">
                                <img className="me-3 rounded-image" src="/images/user-avatar-1.png" width="80"></img>
                                <div>
                                    <p className="card-subtitle text-muted">Eventory Users</p>
                                    <h1 className="card-title mb-0">210</h1>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-2">
                    <Link to="/manage-organizers" className="text-decoration-none text-black">
                        <div className="card m-1 card-border-radius shadow-sm shadow-hover">
                            <div className="card-body d-flex align-items-center">
                                <img className="me-3" src="/images/organizer-avatar.png" width="80"></img>
                                <div>
                                    <p className="card-subtitle text-muted">Eventory Organizers</p>
                                    <h1 className="card-title mb-0">210</h1>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-12 col-md-6 p-2">
                    <div className="card m-1 card-border-radius shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <img className="me-3" src="/images/eventory-logo.png" width="80"></img>
                            <div>
                                <p className="card-subtitle text-muted">Eventory Exclusive Events</p>
                                <h1 className="card-title mb-0">52</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-6 p-2">
                    <div className="card m-1 card-border-radius shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <img className="me-3 rounded-image" src="/images/forgotpassword-image.jpg" width="80"></img>
                            <div>
                                <p className="card-subtitle text-muted">Final Project</p>
                                <h1 className="card-title mb-0">CS5610</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AdminDashboard;