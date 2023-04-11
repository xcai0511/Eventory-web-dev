import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSignUpThunk} from "../../services/users-thunks";
import "./index.css";
import "../../projectIndex.css";

function Signup() {
    let [usernameInput, setUsernameInput] = useState('');
    let [passwordInput, setPasswordInput] = useState('');
    let [firstNameInput, setFirstNameInput] = useState('');
    let [lastNameInput, setLastNameInput] = useState('');
    let [dobInput, setDobInput] = useState('');
    const signUpStatus = useSelector(state => state.user.userStatus);
    const signUpData = useSelector(state => state.user.userData);
    const dispatch = useDispatch();
    const signUpClickHandler = (event) => {
        event.preventDefault();
        const newUser = {
            username: usernameInput,
            password: passwordInput,
            firstName: firstNameInput,
            lastName: lastNameInput,
            dateOfBirth: dobInput
        };
        dispatch(userSignUpThunk(newUser));
    };
    return (
        <form className="login-signup-wrapper"  onSubmit={signUpClickHandler}>
            <div className="container login-signup-main">
                <div className="row signup-row">
                    <div className="col-md-6 signup-image"/>
                    <div className="col-md-6 login-signup-form">
                        <div className="login-signup-input-box">
                            <h4 className="finalproj-text-align-center mb-2 fw-bold">Get Started</h4>
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
                                <input type="text" className="login-signup-input" id="signup-user-first-name"
                                       placeholder="First Name" autoComplete="off" value={firstNameInput}
                                       onChange={(event) => setFirstNameInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="text" className="login-signup-input" id="signup-user-last-name"
                                       placeholder="Last Name" autoComplete="off" value={lastNameInput}
                                       onChange={(event) => setLastNameInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="text" className="login-signup-input" id="signup-user-email"
                                       placeholder="Email Address" autoComplete="off" value={usernameInput}
                                       onChange={(event) => setUsernameInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="date" className="login-signup-input" id="signup-user-dob"
                                       placeholder="Date of Birth" value={dobInput}
                                       onChange={(event) => setDobInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="password" className="login-signup-input" id="signup-user-password"
                                       placeholder="Password" value={passwordInput}
                                       onChange={(event) => setPasswordInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field mb-1">
                                <small><a className="text-decoration-none" href="#">Signing up as an
                                    organizer?</a></small>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="submit" className="login-signup-submit fw-bold mt-2 mb-4" value="Sign up"/>
                            </div>
                            <div className="signup-link finalproj-text-align-center">
                                <small>Already have an account? <a className="text-decoration-none" href="#">Log in</a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Signup;