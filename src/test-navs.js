import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/" className="text-decoration-none me-5">Search Result</Link>
            <Link to="/detail" className="text-decoration-none me-2">Event Detail</Link>
        </div>
    )
}

export default Nav;