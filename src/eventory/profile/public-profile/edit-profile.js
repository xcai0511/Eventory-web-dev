import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileThunk } from '../../../services/auth-thunks';
import { updateUserProfileThunk } from '../../../services/users-thunk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { setCurrentUser } from '../../../reducers/auth-reducer';

function EditProfileComponent({ setIsEditingProfile, currentUser }) {
    const dispatch = useDispatch();
    // console.log('edit profile: -------' + JSON.stringify(currentUser));

    // const currentUser = useSelector((state) => state.auth.currentUser);
    // console.log('edit profile current user: -------' + JSON.stringify(updatedUser));
    // const [currentUser, setCurrentUser] = useState(currentUser);
    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [bio, setBio] = useState(currentUser.bio);
    const [location, setLocation] = useState(currentUser.location);

    // define change handlers
    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
        currentUser.firstName = event.target.value; // Update firstName in currentUser
    };

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
        currentUser.lastName = event.target.value; // Update lastName in currentUser
    };

    const bioChangeHandler = (event) => {
        setBio(event.target.value);
        currentUser.lastName = event.target.value; // Update lastName in currentUser
    };

    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
        currentUser.location = event.target.value; // Update location in currentUser
    };

    const saveHandler = (event) => {
        event.preventDefault();
        const formData = { firstName, lastName, bio, location };
        dispatch(
            updateUserProfileThunk({ userId: currentUser._id, updatedUser: formData })
        ).then(() => {
            setIsEditingProfile(false); // close the edit profile form
        });
    };

    // const saveHandler = (event) => {
    //     event.preventDefault();

    //     const updatedUser = {
    //         ...currentUser,
    //         firstName,
    //         lastName,
    //         bio,
    //         location,
    //     };

    //     dispatch(updateUserProfileThunk({ userId: currentUser.id, updatedUser }))
    //         .then((response) => {
    //             dispatch(setCurrentUser(response.payload));
    //             setIsEditingProfile(false);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    const cancelClickHandler = () => {
        // reset the input fields to the initial values
        // setName(`${profile.firstName} ${profile.lastName}`);
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
                        // TODO: change the image
                        src={require(`../../images/background.jpg`)}
                        className="img-fluid profile-banner"
                        alt="banner"
                    />
                    <img
                        src={require(`../../images/black.jpg`)}
                        className="img-fluid opacity-50 profile-banner position-absolute top-0 left-0 right-0 bottom-0"
                        alt="black overlay"
                    />
                    <img
                        // TODO: change the image
                        src={require(`../../images/default-profile-photo.jpg`)}
                        className="position-absolute rounded-circle profile-avatar profile-avatar-location"
                        alt="profile"
                    />
                    <img
                        src={require(`../../images/black.jpg`)}
                        className="opacity-25 position-absolute translate-middle-x icon-150px rounded-circle profile-avatar profile-avatar-location"
                        alt="black overlay for avatar"
                    />
                    <div
                        className="position-absolute translate-middle-x rounded-circle profile-avatar-location"
                        style={{ marginBottom: '60px' }}>
                        <FontAwesomeIcon
                            icon={icon({ name: 'camera', style: 'solid' })}
                            size="3x"
                            style={{ color: '#e3e3e3' }}
                        />
                    </div>
                </div>
            </div>
            {/* <!-- change name --> */}
            <div className="card mt-4 border">
                {/* first and last name */}
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
                            Where do you explore for events? Let us know and we'll
                            personalize your recommendations.
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

            {/* add more input fields here as needed */}
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
