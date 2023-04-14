import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./header.css"
import InputGroup from 'react-bootstrap/InputGroup';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchFilterThunk} from "../../services/search-thunks";

const HeaderSearchBar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [location, setLocation] = useState('');
    const [keyword, setKeyword] = useState('');

    const locationHandler = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
    };
    const keywordHandler = (event) => {
        const newKeyword = event.target.value;
        setKeyword(newKeyword);
    };
    const searchOnclickHandler = () => {
        const queryParams = new URLSearchParams({
            city: location,
            keyword: keyword,
        });
        navigate(`/results/search?${queryParams.toString()}`);
    };


    return(
        <div className="wd-header wd-header-margin">
            <div className="wd-searchbar container d-none d-md-block">
                <h2 className="ms-3">Search Your Events</h2>
                <div className="row ms-1 me-1">
                    <InputGroup className="mt-2">
                        <InputGroup.Text>
                            <i className="bi bi-geo-alt"></i>
                        </InputGroup.Text>
                        <input placeholder="City" className="d-inline form-control" value={location} onChange={locationHandler} />
                        <InputGroup.Text>
                            <i className="bi bi-search-heart"></i>
                        </InputGroup.Text>
                        <input placeholder="Search for events, keywords, and venues" className="d-inline form-control w-25" value={keyword} onChange={keywordHandler}/>
                        <button className="btn d-inline btn-dark" onClick={searchOnclickHandler}>
                            <Link to="/results" className="text-decoration-none link-light" onClick={searchOnclickHandler}>Search</Link>
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
                        <input placeholder="City" className="d-inline form-control" value={location} onChange={locationHandler} />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>
                            <i className="bi bi-geo-alt"></i>
                        </InputGroup.Text>
                        <input placeholder="Search for events, keywords, and venues" className="d-inline form-control w-25" value={keyword} onChange={keywordHandler}/>
                    </InputGroup>
                </div>
                <button className="btn d-inline btn-dark mt-2 ms-2 me-2" onClick={searchOnclickHandler}>
                    <Link to="/results" className="text-decoration-none link-light" onClick={searchOnclickHandler}>Search</Link>
                </button>
            </div>
        </div>
    );
};
export default HeaderSearchBar;