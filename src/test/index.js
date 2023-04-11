import React from "react";
import resultReducer from "./search-result-list/result-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ResultList from "./search-result-list";
import "./index.css";
import HeaderSearchBar from "./header-search-bar";
import SearchBar from "./search-bar";

const store = configureStore(
    {reducer: {result: resultReducer}});
function SearchResult() {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}
export default SearchResult;
