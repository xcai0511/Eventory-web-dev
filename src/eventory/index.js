import Nav from "../nav";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import HeaderSearchBar from "../search-events/header-search-bar";

const store = configureStore({
    reducer: {
        // user: userReducer,
        // auth: authReducer,
    }
});

function Eventory() {
    return(
        <Provider store={store}>
            <Nav/>
            <HeaderSearchBar/>
        </Provider>
    );
}
export default Eventory;
