import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {logOutThunk} from "../../services/auth-thunks";

function Profile() {
    const currentUser = useSelector(state => state.auth.currentUser);
    console.log("currentUser");
    console.log(JSON.stringify(currentUser));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <h2>This is profile. It should only exist when someone is logged in.</h2>
            <div>First Name: {currentUser.firstName}</div>
            <div>Last Name: {currentUser.lastName}</div>
            <div>Date of Birth: {currentUser.dateOfBirth}</div>
            <button onClick={() => {
                dispatch(logOutThunk());
                navigate("/home");
            }}>Logout</button>
        </div>
    );
}
export default Profile;