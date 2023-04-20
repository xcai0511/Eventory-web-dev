import React from "react";
import SearchBar from "../search-bar";
import ResultList from "../search-ticketmaster-result-list";
import Nav from "../../nav";
import EventoryResultList from "../search-eventory-result-list";

function SearchPage() {
    return (
        <>
            <div>
                <SearchBar/>
            </div>
            <div className="col">
            </div>
            <div className="mt-2" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "800px",
                margin: "auto"
            }}>
                <EventoryResultList/>
            </div>
            <div className="" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "800px",
                margin: "auto"
            }}>
                <ResultList/>
            </div>
        </>

    );
};

export default SearchPage;