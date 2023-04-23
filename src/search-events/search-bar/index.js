import React, { useState } from 'react';
import '../header-search-bar/header.css';
import './searchbar.css';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { searchFilterThunk } from '../../services/ticketmaster-thunks';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { eventFilterThunk } from '../../services/eventory-thunks';

const SearchBar = () => {
    const [isOpen, setOpen] = useState(false);
    const Filter = ['Exclusive Events', 'General Events', 'All Events'];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const link = useLocation();
    const queryParams = new URLSearchParams(link.search);
    let l = queryParams.get('city');
    let k = queryParams.get('keyword');

    const [location, setLocation] = useState(l);
    const [keyword, setKeyword] = useState(k);

    let kw = 'ALL EVENTS';
    if (k) {
        kw = k;
    }

    const locationHandler = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
    };
    const keywordHandler = (event) => {
        const newKeyword = event.target.value;
        setKeyword(newKeyword);
    };
    const searchOnclickHandler = async () => {
        dispatch(eventFilterThunk({ location, keyword }));
        dispatch(searchFilterThunk({ location, keyword }));
        const queryParams = new URLSearchParams({
            city: location,
            keyword: keyword,
            type: type.type,
        });
        navigate(`/results/search?${queryParams.toString()}`);
    };

    const [type, setType] = useState('');

    return (
        <div className="wd-search-result">
            <div className="wd-header-sm mt-3">
                <div className="wd-searchbar-sm container d-none d-md-block">
                    <div className="row ms-1 me-1">
                        <InputGroup className="mt-2">
                            <InputGroup.Text>
                                <i className="bi bi-geo-alt"></i>
                            </InputGroup.Text>
                            <input
                                placeholder="City"
                                className="d-inline form-control"
                                value={location}
                                onChange={locationHandler}
                            />
                            <InputGroup.Text>
                                <i className="bi bi-search-heart"></i>
                            </InputGroup.Text>
                            <input
                                placeholder="Search for events, keywords, and venues"
                                className="d-inline form-control w-25"
                                value={keyword}
                                onChange={keywordHandler}
                            />
                            <button
                                className="btn d-inline btn-dark"
                                onClick={searchOnclickHandler}>
                                Search
                            </button>
                        </InputGroup>
                    </div>
                    <button
                        className="btn wd-filter btn-dark ps-3 pe-3"
                        onClick={() => setOpen(true)}>
                        <i className="bi bi-funnel me-2"></i>
                        <span>More Filters</span>
                    </button>
                    {isOpen && (
                        <div className="shadow-lg position-absolute wd-filter-option">
                            {Filter.map((type) => (
                                <button
                                    key={type}
                                    className="btn ms-0 ms-1 btn-light"
                                    onClick={() => (setType({ type }), setOpen(false))}>
                                    {type}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="wd-searchbar-sm container d-md-none">
                    <div className="col ms-2 me-2">
                        <InputGroup className="mt-2 mb-2">
                            <InputGroup.Text>
                                <i className="bi bi-geo-alt"></i>
                            </InputGroup.Text>
                            <input
                                placeholder="City"
                                className="d-inline form-control"
                                value={location}
                                onChange={locationHandler}
                            />
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <i className="bi bi-search-heart"></i>
                            </InputGroup.Text>
                            <input
                                placeholder="Search for events, keywords, and venues"
                                className="d-inline form-control w-25"
                                value={keyword}
                                onChange={keywordHandler}
                            />
                        </InputGroup>
                    </div>
                    <button
                        className="btn d-inline btn-dark mt-2 ms-2 me-2"
                        onClick={searchOnclickHandler}>
                        Search
                    </button>
                    <button
                        className="btn wd-filter btn-dark ps-3 pe-3"
                        onClick={() => setOpen(!isOpen)}>
                        <i className="bi bi-funnel me-2"></i>
                        <span>More Filters</span>
                    </button>
                    {isOpen && (
                        <div className="shadow-lg position-absolute wd-filter-option">
                            {Filter.map((type) => (
                                <button
                                    key={type}
                                    className="btn ms-0 ms-1 btn-light"
                                    onClick={() => (setType({ type }), setOpen(false))}>
                                    {type}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <h3 className="mt-3 mb-2 fw-bold">'{kw}'</h3>
            <h5 className="text-secondary mt-1">Search Results</h5>
        </div>
    );
};

export default SearchBar;