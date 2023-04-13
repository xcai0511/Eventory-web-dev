import React from "react";
import SearchBar from "../search-bar";
import ResultList from "../search-result-list";

const SearchPage = () => {
    return (
        <>
            <div className="mt-2">
                <SearchBar/>
            </div>
            <div className="mt-2" style={{
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