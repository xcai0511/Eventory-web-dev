import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateOrganizerByOrganizerIdThunk} from "../../services/organizers-thunks";
import {profileThunk} from "../../services/auth-thunks";
import {isCurrentUserRoleOrganizer} from "../../utils/utils";

const OrganizerProfileDetails = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);
    isCurrentUserRoleOrganizer(currentUser);

    const [name, setName] = useState(currentUser.name);
    const [bio, setBio] = useState(currentUser.bio);

    const [editable, setEditable] = useState(false);

    const handleEditClick = (event) => {
        event.preventDefault();
        setEditable(true);
    };

    const handleSaveClick = async (event) => {
        // Save changes and update currentUser object in localStorage
        event.preventDefault();
        let updates = {
            name: name,
            bio: bio
        };
        await dispatch(updateOrganizerByOrganizerIdThunk({
            organizerId: currentUser._id, updatedOrganizer: updates}))
            .then(() => {
                let currentUser = JSON.parse(localStorage.getItem('currentUser'))
                currentUser.name = name;
                currentUser.bio = bio;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                dispatch(profileThunk());
                }
            );
        setEditable(false);
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name" className="mb-1">Name</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!editable}
                />
            </div>
            <div className="form-group">
                <label htmlFor="bio" className="mb-1">Organization Description</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    disabled={!editable}
                />
            </div>
            {!editable ? (
                <button className="btn btn-primary" onClick={handleEditClick}>
                    Edit Profile
                </button>
            ) : (
                <button className="btn btn-primary" onClick={handleSaveClick}>
                    Save Profile
                </button>
            )}
        </form>
    );
};

export default OrganizerProfileDetails;