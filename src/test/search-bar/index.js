import React, {useRef, useState} from "react";
import "../header-search-bar/header.css"
import "./searchbar.css"
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = () => {
    const [isOpen, setOpen] = useState(false);
    const Filter = ["Exclusive Events", "General Events", "All Events"];

    return(
        <div className="wd-search-result">
            <div className="wd-header-sm mt-3">
                <div className="wd-searchbar-sm container d-none d-md-block">
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
                            <button className="btn d-inline btn-dark">Search</button>
                        </InputGroup>
                    </div>
                    <button className="btn wd-filter btn-dark" onClick={() => setOpen(true)}>
                        <i className="bi bi-funnel me-2"></i>
                        <span>More Filters</span>
                    </button>
                    {
                        isOpen &&
                        <div className="shadow-lg position-absolute wd-filter-option">
                            {
                                Filter.map(
                                    (type) => (
                                        <button key={type} className="btn ms-0 ms-1 btn-light" onClick={() => (console.log({type}), setOpen(false))}>
                                            {type}
                                        </button>
                                    )
                                )
                            }
                        </div>
                    }
                </div>
                <div className="wd-searchbar-sm container d-md-none">
                    <div className="col ms-2 me-2">
                        <InputGroup className="mt-2 mb-2">
                            <InputGroup.Text>
                                <i className="bi bi-geo-alt"></i>
                            </InputGroup.Text>
                            <input placeholder="City or Zip Code" className="d-inline form-control"/>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <i className="bi bi-search-heart"></i>
                            </InputGroup.Text>
                            <input placeholder="Search for events, artists, and venues" className="d-inline form-control w-25"/>
                        </InputGroup>
                    </div>
                    <button className="btn d-inline btn-dark mt-2 ms-2 me-2">Search</button>
                    <button className="btn wd-filter btn-dark" onClick={() => setOpen(!isOpen)}>
                        <i className="bi bi-funnel me-2"></i>
                        <span>More Filters</span>
                    </button>
                    {
                        isOpen &&
                        <div className="shadow-lg position-absolute wd-filter-option">
                            {
                                Filter.map(
                                    (type) => (
                                        <button key={type} className="btn ms-0 ms-1 btn-light" onClick={() => (console.log({type}), setOpen(false))}>
                                            {type}
                                        </button>
                                    )
                                )
                            }
                        </div>
                    }
                </div>
            </div>
            <h2 className="mt-3">'Search Keyword'</h2>
            <h5 className="text-secondary">Search Results</h5>
        </div>

    );
};
export default SearchBar;