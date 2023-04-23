import {useDispatch, useSelector} from "react-redux";
import {deleteOrganizerByIdThunk, getAllOrganizersThunk} from "../../services/organizersManagement-thunks";
import React, {useEffect} from "react";

const AdminManageOrganizersPage = () => {
    // Retrieve current user
    const currentUser = useSelector((state) => state.auth.currentUser);

    // Get all organizers info
    const organizersStatus = useSelector((state) => state.organizersManagement.status);
    const organizersError = useSelector((state) => state.organizersManagement.error);
    const organizersData = useSelector((state) => state.organizersManagement.data);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrganizersThunk());
    }, []);

    const numOrganizers = organizersData?.length ?? 0;

    if (!currentUser || currentUser.role !== "admin") {
        return (
            <div className="container mt-4">
                <div>
                    <h4>Unauthorized</h4>
                </div>
            </div>
        )
    }

    if (organizersStatus === "pending") {
        return (
            <div className="container mt-4">
                <div>
                    <h3 className="mb-3">Organizers Management</h3>
                    <h4>Loading...</h4>
                </div>
            </div>
        )
    } else if (organizersStatus === "rejected") {
        return (
            <div className="container mt-4">
                <div>
                    <h3 className="mb-3">Organizers Management</h3>
                    <h4>Something went wrong. Please try again later.</h4>
                </div>
            </div>
        )
    }

    const deleteOrganizerOnClickHandler = async (organizerId) => {
        try {
            await dispatch(deleteOrganizerByIdThunk(organizerId));
            dispatch(getAllOrganizersThunk());
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <div className="container mt-4">
                <div>
                    <h3>Organizers Management</h3>
                    <p className="mb-3">{numOrganizers} organizer{numOrganizers !== 1 ? 's' : ''}</p>
                    {organizersData &&
                        <ul className="list-group">
                            {organizersData.map((organizer) => (
                                <li key={organizer._id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <span className="fw-bold">ID: </span>
                                        <span>{organizer._id}</span>
                                        <br />
                                        <span className="fw-bold">Email: </span>
                                        <span>{organizer.username}</span>
                                        <br />
                                        <span className="fw-bold">Name: </span>
                                        <span>{organizer.name}</span>

                                    </div>
                                    <i className="bi bi-trash3-fill text-danger" style={{cursor: "pointer"}}
                                        onClick={() => deleteOrganizerOnClickHandler(organizer._id)}></i>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminManageOrganizersPage;