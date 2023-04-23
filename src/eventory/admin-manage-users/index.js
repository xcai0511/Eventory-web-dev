import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isCurrentUserRoleAdmin} from "../../utils/utils";
import {deleteUserByIdThunk, getAllUsersThunk} from "../../services/usersManagement-thunks";
const AdminManageUsersPage = () => {
    // Retrieve current user
    const currentUser = useSelector((state) => state.auth.currentUser);

    // Get all users info
    const usersStatus = useSelector((state) => state.usersManagement.status);
    const usersError = useSelector((state) => state.usersManagement.error);
    const usersData = useSelector((state) => state.usersManagement.data);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsersThunk());
    }, []);

    const numUsers = usersData?.length ?? 0;

    if (!currentUser || currentUser.role !== "admin") {
        return (
            <div className="container mt-4">
                <div>
                    <h4>Unauthorized</h4>
                </div>
            </div>
        )
    }

    if (usersStatus === "pending") {
        return (
            <div className="container mt-4">
                <div>
                    <h3 className="mb-3">Users Management</h3>
                    <h4>Loading...</h4>
                </div>
            </div>
        )
    } else if (usersStatus === "rejected") {
        console.log("AdminManageUsersPage " + usersError);
        return (
            <div className="container mt-4">
                <div>
                    <h3 className="mb-3">Users Management</h3>
                    <h4>Something went wrong. Please try again later.</h4>
                </div>
            </div>
        )
    }

    const deleteUserOnClickHandler = async (userId) => {
        try {
            await dispatch(deleteUserByIdThunk(userId));
            dispatch(getAllUsersThunk());
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            {/*{(currentUser.role !== "admin") ? <h3 className="mt-4 ms-4">Unauthorized.</h3> :*/}
        <div className="container mt-4">
            <div>
                <h3>Users Management</h3>
                <p className="mb-3">{numUsers} user{numUsers !== 1 ? 's' : ''}</p>
                {usersData &&
                    <ul className="list-group">
                        {usersData.map((user) => (
                            <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <span className="fw-bold">ID: </span>
                                    <span>{user._id}</span>
                                    <br />
                                    <span className="fw-bold">Email: </span>
                                    <span>{user.username}</span>
                                    <br />
                                    <span className="fw-bold">Name: </span>
                                    <span>{user.firstName} {user.lastName}</span>

                                </div>
                                <i className="bi bi-trash3-fill text-danger" style={{cursor: "pointer"}}
                                    onClick={() => deleteUserOnClickHandler(user._id)}></i>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
            }
        </div>
    );
};

export default AdminManageUsersPage;
