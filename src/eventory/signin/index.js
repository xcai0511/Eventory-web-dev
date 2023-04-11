import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSignInThunk} from "../../services/users-thunks";

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
        dispatch(userSignInThunk(userCredentials));
    };
    return (
        <div>
            <h2>This is sign in.</h2>
            <form onSubmit={signInClickHandler}>
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
                <button type="submit" id="signInButton">
                    Sign in
                </button>
            </form>
            <br/>
            {(signInStatus === 'fulfilled') && (
                <div>Status: {signInStatus}<br/>Message: {signInData.data.message}</div>
            )}
            {(signInStatus === 'rejected') && (
                <div>Status: {signInStatus}<br/>Message: {signInData.message}</div>
            )}
            {signInStatus === 'idle' && (
                <div>Please enter your username and password and then click the "Sign in" button.</div>
            )}
            {signInStatus === 'pending' && (
                <div>Loading...</div>
            )}
        </div>
    );
}
export default Signin;