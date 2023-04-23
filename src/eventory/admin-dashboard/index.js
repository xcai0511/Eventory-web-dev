import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAllUsersThunk} from "../../services/usersManagement-thunks";
import {getAllOrganizersThunk} from "../../services/organizersManagement-thunks";
import {eventThunk} from "../../services/eventory-thunks";

const AdminDashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.currentUser);

    // Get all users info
    const usersStatus = useSelector((state) => state.usersManagement.status);
    const usersError = useSelector((state) => state.usersManagement.error);
    const usersData = useSelector((state) => state.usersManagement.data);

    // Get all organizers info
    const organizersStatus = useSelector((state) => state.organizersManagement.status);
    const organizersError = useSelector((state) => state.organizersManagement.error);
    const organizersData = useSelector((state) => state.organizersManagement.data);

    // Get all eventory events info
    const eventsData = useSelector((state) => state.usersEvent.result);

    const numUsers = usersData?.length ?? "N/A";
    const numOrganizers = organizersData?.length ?? "N/A";
    const numEventoryEvents = eventsData?.length ?? "N/A";

    useEffect(() => {
        dispatch(getAllOrganizersThunk());
        dispatch(getAllUsersThunk());
        dispatch(eventThunk());
    }, []);

    const manageUsersOnClickHandler = async () => {
        try {
            await dispatch(getAllUsersThunk());
            navigate("/manage-users");
        } catch (error) {
            alert(error.message);
        }
    }

    const manageOrganizersOnClickHandler = async () => {
        try {
            await dispatch(getAllOrganizersThunk());
            navigate("/manage-organizers");
        } catch (error) {
            alert(error.message);
        }
    }

    const aboutAdminsOnClickHandler = () => {
        navigate("/about");
    }

    if (currentUser) {
        return(
            <div className="container mt-4">
                {(currentUser.role !== "admin") ? <h3 className="mt-4 ms-4">Unauthorized.</h3> :
                    <div className="row">
                        <div>
                            <h3>Welcome, {currentUser.firstName}.</h3>
                        </div>

                        <div onClick={aboutAdminsOnClickHandler} className="col-12 col-md-6 col-lg-4 col-xl-4 p-2" style={{cursor:"pointer"}}>
                            <div className="text-decoration-none text-black">
                                <div className="card m-1 card-border-radius shadow-sm shadow-hover">
                                    <div className="card-body d-flex align-items-center">
                                        <img className="me-3 rounded-image" src="/images/admin-icon.png"></img>
                                        <div>
                                            <p className="card-subtitle text-muted"># of Admins</p>
                                            <h1 className="card-title mb-0">4</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-2" style={{cursor:"pointer"}}>
                            <div onClick={manageUsersOnClickHandler} className="text-decoration-none text-black">
                                <div className="card m-1 card-border-radius shadow-sm shadow-hover">
                                    <div className="card-body d-flex align-items-center">
                                        <img className="me-3 rounded-image" src="/images/user-avatar-1.png"></img>
                                        <div>
                                            <p className="card-subtitle text-muted"># of Users</p>
                                            <h1 className="card-title mb-0">{numUsers}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-2" style={{cursor:"pointer"}}>
                            <div onClick={manageOrganizersOnClickHandler} className="text-decoration-none text-black">
                                <div className="card m-1 card-border-radius shadow-sm shadow-hover">
                                    <div className="card-body d-flex align-items-center">
                                        <img className="me-3 rounded-image" src="/images/organizer-avatar.png"></img>
                                        <div>
                                            <p className="card-subtitle text-muted"># of Organizers</p>
                                            <h1 className="card-title mb-0">{numOrganizers}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 p-2">
                            <div>
                                <div className="card m-1 card-border-radius shadow-sm">
                                    <div className="card-body d-flex align-items-center">
                                        <img className="me-3 rounded-image" src="/images/eventory-logo.png"></img>
                                        <div>
                                            <p className="card-subtitle text-muted">Exclusive Events</p>
                                            <h1 className="card-title mb-0">{numEventoryEvents}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-6 p-2">
                            <div>
                                <div className="card m-1 card-border-radius shadow-sm">
                                    <div className="card-body d-flex align-items-center">
                                        <img className="me-3 rounded-image" src="/images/forgotpassword-image.jpg"></img>
                                        <div>
                                            <p className="card-subtitle text-muted">Final Project</p>
                                            <h1 className="card-title mb-0">CS5610</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
};

export default AdminDashboard;