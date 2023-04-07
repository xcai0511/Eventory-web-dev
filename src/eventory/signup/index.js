import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSignUpThunk} from "../../services/users-thunks";

function Signup() {
    let [usernameInput, setUsernameInput] = useState('');
    let [passwordInput, setPasswordInput] = useState('');
    const signUpStatus = useSelector(state => state.user.signUpStatus);
    const signUpData = useSelector(state => state.user.signUpData);
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
            <form>
                <label>
                    <span>Username: </span>
                    <input type="text" value={usernameInput} id="usernameInput"
                           onChange={(event) => setUsernameInput(event.target.value)}/>
                </label>
                <br/><br/>
                <label>
                    <span>Password: </span>
                    <input type="password" value={passwordInput} id="passwordInput"
                           onChange={(event) => setPasswordInput(event.target.value)}/>
                </label>
                <br/><br/>
                <button type="button" id="signUpButton" onClick={signUpClickHandler}>
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