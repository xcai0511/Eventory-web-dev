import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSignUpThunk} from "../../services/users-thunks";

function Signup() {
    let [usernameInput, setUsernameInput] = useState('');
    let [passwordInput, setPasswordInput] = useState('');
    let [firstNameInput, setFirstNameInput] = useState('');
    let [lastNameInput, setLastNameInput] = useState('');
    const signUpStatus = useSelector(state => state.user.userStatus);
    const signUpData = useSelector(state => state.user.userData);
    const dispatch = useDispatch();
    const signUpClickHandler = (event) => {
        event.preventDefault();
        const newUser = {
            username: usernameInput,
            password: passwordInput,
            firstName: firstNameInput,
            lastName: lastNameInput
        };
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
                <label>
                    <span>First Name: </span>
                    <input type="text" value={firstNameInput} id="firstNameInput"
                           onChange={(event) => setFirstNameInput(event.target.value)} required/>
                </label>
                <br/><br/>
                <label>
                    <span>Last Name: </span>
                    <input type="text" value={lastNameInput} id="lastNameInput"
                           onChange={(event) => setLastNameInput(event.target.value)} required/>
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