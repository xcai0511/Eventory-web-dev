import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSignUpThunk} from "../../services/users-thunks";

function Signup() {
    let [signUp, setSignUp] = useState('');
    const profileItem = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const signUpClickHandler = () => {
        const newUser = {
            username: usernameInput,
            password: passwordInput,
        }
        dispatch(userSignUpThunk(newUser));
    }
    return (
        <div>
            <h2>This is sign up.</h2>
        </div>
    );
}
export default Signup;