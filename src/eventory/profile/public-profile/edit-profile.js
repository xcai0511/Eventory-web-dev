import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { profileThunk } from '../../../services/auth-thunks';
import { updateUserProfileThunk } from '../../../services/users-thunk';

function EditProfileComponent({ setIsEditingProfile, currentUser }) {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [bio, setBio] = useState(currentUser.bio);
    const [location, setLocation] = useState(currentUser.location);

    // define change handlers
    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    };

    const bioChangeHandler = (event) => {
        setBio(event.target.value);
    };

    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    };

    const saveHandler = (event) => {
        event.preventDefault();
        const formData = { firstName, lastName, bio, location };
        dispatch(
            updateUserProfileThunk({ userId: currentUser._id, updatedUser: formData })
        ).then(() => {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            currentUser.firstName = firstName;
            currentUser.lastName = lastName;
            currentUser.bio = bio;
            currentUser.location = location;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            setIsEditingProfile(false); // close the edit profile form
            profileThunk();
            window.location.reload();
        });
    };

    const cancelClickHandler = () => {
        setFirstName(currentUser.firstName);
        setLastName(currentUser.lastName);
        setBio(currentUser.bio);
        setLocation(currentUser.location);
        // switch to the ProfileContentComponent
        setIsEditingProfile(false);
    };

    return (
        <div className="container">
            {/* Upper banner and avatar  */}
            <div className="position-relative">
                <div className="d-flex justify-content-center">
                    <img
                        src={require(`../../images/event2.jpg`)}
                        className="img-fluid profile-banner"
                        alt="banner"
                    />
                </div>
            </div>
            {/* <!-- change name --> */}
            <div className="card mt-4 border">
                <div className="d-flex justify-content-center">
                    <div className="card-body">
                        <label
                            htmlFor="fist-name"
                            className="form-label profile-label-font">
                            First Name
                        </label>
                        <textarea
                            className="profile-textarea form-control border-0 p-0 profile-textarea"
                            id="firstName"
                            rows="1"
                            placeholder={firstName}
                            onChange={firstNameChangeHandler}
                            style={{ boxShadow: 'none' }}></textarea>
                    </div>
                    <div className="card-body">
                        <label
                            htmlFor="last-name"
                            className="form-label profile-label-font">
                            Last Name
                        </label>
                        <textarea
                            className="profile-textarea form-control border-0 p-0"
                            id="lastName"
                            rows="1"
                            placeholder={lastName}
                            onChange={lastNameChangeHandler}
                            style={{ boxShadow: 'none' }}></textarea>
                    </div>
                </div>
            </div>
            {/* <!-- change location --> */}
            <div className="card mt-4 border">
                <div className="card-body">
                    <label htmlFor="location" className="form-label ">
                        <div className="profile-label-font">Location</div>
                        <div className="text-muted fs-14px">
                            Share your location with other users
                        </div>
                    </label>
                    <textarea
                        className="form-control border-0 p-0 profile-textarea"
                        id="location"
                        rows="1"
                        placeholder={location}
                        onChange={locationChangeHandler}
                        style={{ boxShadow: 'none' }}></textarea>
                </div>
            </div>
            {/* <!-- change bio --> */}
            <div className="card mt-4 border">
                <div className="card-body">
                    <label htmlFor="bio" className="form-label">
                        <div className="profile-label-font">Bio</div>
                        <div className="text-muted fs-14px">
                            Tell us more about yourself
                        </div>
                    </label>
                    <textarea
                        className="form-control border-0 p-0 profile-textarea"
                        id="bio"
                        rows="3"
                        placeholder={bio}
                        onChange={bioChangeHandler}
                        style={{ boxShadow: 'none' }}></textarea>
                </div>
            </div>

            <div className="row mt-3 mx-auto d-flex justify-content-between">
                <button className="btn col-3" onClick={saveHandler}>
                    <span className="mx-3">Save</span>
                </button>
                <button className="btn col-3" onClick={cancelClickHandler}>
                    <span className="mx-3">Cancel</span>
                </button>
            </div>
        </div>
    );
}

export default EditProfileComponent;
