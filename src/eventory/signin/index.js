import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {signInThunk} from "../../services/users-thunks";
import "./index.css";
import "../../projectIndex.css";

function Signin() {
    let [usernameInput, setUsernameInput] = useState('');
    let [passwordInput, setPasswordInput] = useState('');
    const signInStatus = useSelector(state => state.user.userStatus);
    const signInData = useSelector(state => state.user.userData);
    const dispatch = useDispatch();
    const signInClickHandler = (event) => {
        event.preventDefault();
        const userCredentials = {
            username: usernameInput,
            password: passwordInput,
        };
        dispatch(signInThunk(userCredentials));
    };
    return (
        <form className="login-signup-wrapper" onSubmit={signInClickHandler}>
            <div className="container login-signup-main">
                <div className="row login-row">
                    <div className="col-md-6 login-image"></div>
                    <div className="col-md-6 login-signup-form">
                        <div className="login-signup-input-box">
                            <h4 className="finalproj-text-align-center mb-3 fw-bold">Sign in to Eventory</h4>
                            {(signInStatus === 'fulfilled') && (
                                <div className="login-signup-input-field text-primary">{signInData.data.message}</div>
                            )}
                            {(signInStatus === 'rejected') && (
                                <div className="login-signup-input-field text-danger">{signInData.message}</div>
                            )}
                            {signInStatus === 'pending' && (
                                <div className="login-signup-input-field text-secondary">Loading...</div>
                            )}
                            <div className="login-signup-input-field">
                                <input type="text" className="login-signup-input" id="login-email"
                                       placeholder="Email Address" value={usernameInput} autoComplete="off"
                                       onChange={(event) => setUsernameInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="password" className="login-signup-input" id="login-password"
                                       placeholder="Password" value={passwordInput}
                                       onChange={(event) => setPasswordInput(event.target.value)} required/>
                            </div>
                            <div className="login-signup-input-field mb-1">
                                <small><a className="text-decoration-none" href="#">Forgot Password</a></small>
                            </div>
                            <div className="login-signup-input-field">
                                <input type="submit" className="login-signup-submit fw-bold mt-2 mb-4" value="Sign in"/>
                            </div>
                            <div className="signup-link finalproj-text-align-center">
                                <small>New to Eventory? <a className="text-decoration-none" href="#">Create an account</a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Signin;