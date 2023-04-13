import React from "react";
import "./header.css"
import InputGroup from 'react-bootstrap/InputGroup';
import {Link} from "react-router-dom";

const HeaderSearchBar = () => {
    return(
        <div className="wd-header wd-header-margin">
            <div className="wd-searchbar container d-none d-md-block">
                <h2 className="ms-3">Search Your Events</h2>
                <div className="row ms-1 me-1">
                    <InputGroup className="mt-2">
                        <InputGroup.Text>
                            <i className="bi bi-geo-alt"></i>
                        </InputGroup.Text>
                        <input placeholder="City or Zip Code" className="d-inline form-control"/>
                        <InputGroup.Text>
                            <i className="bi bi-search-heart"></i>
                        </InputGroup.Text>
                        <input placeholder="Search for events, artists, and venues" className="d-inline form-control w-25"/>
                        <button className="btn d-inline btn-dark">
                            <Link to="/results" className="text-decoration-none link-light">Search</Link>
                        </button>
                    </InputGroup>
                </div>
            </div>
            <div className="wd-searchbar container d-md-none">
                <h2 className="ms-2">Search Your Events</h2>
                <div className="col ms-2 me-2">
                    <InputGroup className="mt-2 mb-2">
                        <InputGroup.Text>
                            <i className="bi bi-geo-alt"></i>
                        </InputGroup.Text>
                        <input placeholder="City or Zip Code" className="d-inline form-control"/>
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>
                            <i className="bi bi-geo-alt"></i>
                        </InputGroup.Text>
                        <input placeholder="Search for events, artists, and venues" className="d-inline form-control w-25"/>
                    </InputGroup>
                </div>
                <button className="btn d-inline btn-dark mt-2 ms-2 me-2">
                    <Link to="/results" className="text-decoration-none link-light">Search</Link>
                </button>
            </div>
        </div>
    );
};
export default HeaderSearchBar;