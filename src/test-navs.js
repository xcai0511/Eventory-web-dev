import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Test Search Result</Link> |
            <Link to="/signup">Test Sign Up Page</Link> |
            <Link to="/signin">Test Sign In Page</Link>
        </div>
    )
}

export default Nav;