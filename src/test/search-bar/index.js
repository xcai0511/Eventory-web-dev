import React from "react";
import "./header.css"
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
    return(
        <section className="wd-home g-0">
            <div className="wd-overlay"></div>
            <div className="wd-searchbar container d-none d-md-block">
                <h2>Search Your Events</h2>
                <div className="row">
                    <InputGroup className="mt-2">
                        <InputGroup.Text>
                            <i className="bi bi-geo-alt"></i>
                        </InputGroup.Text>
                        <input placeholder="City or Zip Code" className="d-inline form-control"/>
                        <InputGroup.Text>
                            <i className="bi bi-search-heart"></i>
                        </InputGroup.Text>
                        <input placeholder="Search for events, artists, and venues" className="d-inline form-control w-25"/>
                        <button className="btn d-inline btn-dark">Search</button>
                    </InputGroup>
                </div>
            </div>
            <div className="wd-searchbar container d-md-none">
                <h2>Search Your Events</h2>
                <InputGroup className="mt-2 mb-2 opacity-100">
                    <InputGroup.Text>
                        <i className="bi bi-geo-alt"></i>
                    </InputGroup.Text>
                    <input placeholder="City or Zip Code" className="d-inline form-control"/>
                </InputGroup>
                <InputGroup className="mb-2 opacity-100">
                    <InputGroup.Text>
                        <i className="bi bi-geo-alt"></i>
                    </InputGroup.Text>
                    <input placeholder="Search for events, artists, and venues" className="d-inline form-control w-25"/>
                </InputGroup>
                <button className="btn d-inline btn-dark">Search</button>
            </div>
        </section>
    );
};
export default SearchBar;