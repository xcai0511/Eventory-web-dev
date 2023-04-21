import React, {useState} from "react";
import {useDispatch} from "react-redux";

const OrganizerProfileDetails = () => {

    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))


    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.username);
    const [bio, setBio] = useState(currentUser.bio);

    const [editable, setEditable] = useState(false);

    const handleEditClick = (event) => {
        event.preventDefault();
        setEditable(true);
    };

    const handleSaveClick = (event) => {
        // Save changes and update currentUser object in localStorage
        // TODO: update user details in database
        event.preventDefault();
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
                <label htmlFor="email" className="mb-1">Email address</label>
                <input
                    type="email"
                    className="form-control mb-3"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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