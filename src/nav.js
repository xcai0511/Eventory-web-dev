import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/signup">Sign up</Link> |
            <Link to="/signin">Sign in</Link> |
            <Link to="/search">Search</Link>
        </div>
    )
}

export default Nav;