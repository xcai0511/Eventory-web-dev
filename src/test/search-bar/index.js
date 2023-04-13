import React, {useRef, useState} from "react";
import "../header-search-bar/header.css"
import "./searchbar.css"
import InputGroup from 'react-bootstrap/InputGroup';
import {useDispatch} from "react-redux";
import {searchFilterThunk} from "../../services/search-thunks";

const SearchBar = () => {
    const [isOpen, setOpen] = useState(false);
    const Filter = ["Exclusive Events", "General Events", "All Events"];

    const dispatch = useDispatch();

    const [location, setLocation] = useState('');
    const [keyword, setKeyword] = useState('');

    const locationHandler = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
    }
    const keywordHandler = (event) => {
        const newKeyword = event.target.value;
        setKeyword(newKeyword);
    }
    const searchOnclickHandler = () => {
        dispatch(searchFilterThunk({location, keyword}));
    }

    return(
        <div className="wd-search-result">
            <div className="wd-header-sm mt-3">
                <div className="wd-searchbar-sm container d-none d-md-block">
                    <div className="row ms-1 me-1">
                        <InputGroup className="mt-2">
                            <InputGroup.Text>
                                <i className="bi bi-geo-alt"></i>
                            </InputGroup.Text>
                            <input placeholder="City" className="d-inline form-control" value={location} onChange={locationHandler}/>
                            <InputGroup.Text>
                                <i className="bi bi-search-heart"></i>
                            </InputGroup.Text>
                            <input placeholder="Search for events, keywords, and venues" className="d-inline form-control w-25" value={keyword} onChange={keywordHandler}/>
                            <button className="btn d-inline btn-dark" onClick={searchOnclickHandler}>Search</button>
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
                            <input placeholder="City" className="d-inline form-control" value={location} onChange={locationHandler}/>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <i className="bi bi-search-heart"></i>
                            </InputGroup.Text>
                            <input placeholder="Search for events, keywords, and venues" className="d-inline form-control w-25" value={keyword} onChange={keywordHandler}/>
                        </InputGroup>
                    </div>
                    <button className="btn d-inline btn-dark mt-2 ms-2 me-2" onClick={searchOnclickHandler}>Search</button>
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
            <h2 className="mt-3">'{keyword}'</h2>
            <h5 className="text-secondary">Search Results</h5>
        </div>

    );
};
export default SearchBar;