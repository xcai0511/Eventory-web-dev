import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSignUpThunk} from "../../services/users-thunks";

function Signup() {
    let [usernameInput, setUsernameInput] = useState('');
    let [passwordInput, setPasswordInput] = useState('');
    const signUpStatus = useSelector(state => state.user.userStatus);
    const signUpData = useSelector(state => state.user.userData);
    const dispatch = useDispatch();
    const signUpClickHandler = () => {
        const newUser = {
            username: usernameInput,
            password: passwordInput,
        }
        dispatch(userSignUpThunk(newUser));
    };
    return (
        <div>
            <h2>This is sign up.</h2>
            <form onSubmit={signUpClickHandler}>
                <label>
                    <span>Username: </span>
                    <input type="email" value={usernameInput} id="usernameInput"
                           onChange={(event) => setUsernameInput(event.target.value)} required/>
                </label>
                <br/><br/>
                <label>
                    <span>Password: </span>
                    <input type="password" value={passwordInput} id="passwordInput"
                           onChange={(event) => setPasswordInput(event.target.value)} required/>
                </label>
                <br/><br/>
                <button type="submit" id="signUpButton">
                    Sign up
                </button>
            </form>
            <br/>
            {(signUpStatus === 'fulfilled') && (
                <div>Status: {signUpStatus}<br/>Message: {signUpData.data.message}</div>
            )}
            {(signUpStatus === 'rejected') && (
                <div>Status: {signUpStatus}<br/>Message: {signUpData.message}</div>
            )}
            {signUpStatus === 'idle' && (
                <div>Please enter your username and password and then click the "Sign up" button.</div>
            )}
            {signUpStatus === 'pending' && (
                <div>Loading...</div>
            )}
        </div>
    );
}
export default Signup;