import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {organizerSignUpThunk} from "../../services/auth-thunks";
import "./signup.css";
import "../index.css";
import {Link} from "react-router-dom";

function OrganizerSignup() {
    let [usernameInput, setUsernameInput] = useState('');
    let [passwordInput, setPasswordInput] = useState('');
    let [nameInput, setNameInput] = useState('');
    let [bioInput, setBioInput] = useState('');
    const signUpStatus = useSelector(state => state.organizer.organizerStatus);
    const signUpData = useSelector(state => state.organizer.organizerData);
    const dispatch = useDispatch();
    const signUpClickHandler = (event) => {
        event.preventDefault();
        const newOrganizer = {
            username: usernameInput,
            password: passwordInput,
            name: nameInput,
            bio: bioInput,
        };
        dispatch(organizerSignUpThunk(newOrganizer));
    };
    return (
        <form className="login-signup-wrapper"  onSubmit={signUpClickHandler}>
            <div className="container login-signup-main">
                <div className="row signup-row">
                    <div className="col-md-6 signup-image"/>
                    <div className="col-md-6 login-signup-form">
                        <div className="login-signup-input-box">
                            <h4 className="finalproj-text-align-center mb-2 fw-bold">Organizer Sign Up</h4>
                            {(signUpStatus === 'fulfilled') && (
                                <div className="login-signup-input-field text-primary">{signUpData.data.message}</div>
                            )}
                            {(signUpStatus === 'rejected') && (
                                <div className="login-signup-input-field text-danger">{signUpData.message}</div>
                            )}
                            {signUpStatus === 'pending' && (
                                <div className="login-signup-input-field text-secondary">Loading...</div>
                            )}
                            <div className="login-signup-input-field">
                                <input type="text" className="login-signup-input" id="signup-organizer-name"
                                       placeholder="Organization Name" autoComplete="off" value={nameInput}
                                       onChange={(event) => setNameInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="text" className="login-signup-input" id="signup-organizer-email"
                                       placeholder="Email Address" autoComplete="off" value={usernameInput}
                                       onChange={(event) => setUsernameInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="textarea" className="login-signup-input" id="signup-organizer-bio"
                                       placeholder="Organization Description" autoComplete="off" value={bioInput}
                                       onChange={(event) => setBioInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="password" className="login-signup-input" id="signup-user-password"
                                       placeholder="Password" value={passwordInput}
                                       onChange={(event) => setPasswordInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field mb-1">
                                <small><Link to="/signup" className="text-decoration-none">Signing up as an
                                    attendee?</Link></small>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="submit" className="login-signup-submit fw-bold mt-2 mb-4" value="Sign up"/>
                            </div>
                            <div className="signup-link finalproj-text-align-center">
                                <small>Already have an account? <Link to="/signin" className="text-decoration-none">Log in</Link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default OrganizerSignup;