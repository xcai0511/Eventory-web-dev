import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Nav() {
    const currentUser = useSelector((state) => state.auth.currentUser);
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/search">Search</Link> |
            <Link to="/signup">Sign up</Link> |
            {!currentUser && <Link to="/signin">Sign in</Link>}
            {currentUser && <Link to="/profile">Profile</Link>}
        </div>
    )
}

export default Nav;