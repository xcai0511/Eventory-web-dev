import {Routes, Route} from "react-router";
import Nav from "../nav";
import Home from "./home";
import Signup from "./signup";
import Signin from "./signin";
import Search from "./search";
import userReducer from "../reducers/user-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

function Eventory() {
    return(
        <Provider store={store}>
            <Nav/>
            <Routes>
                <Route index
                       element={<Home/>}/>
                <Route path="signup"
                       element={<Signup/>}/>
                <Route path="signin"
                       element={<Signin/>}/>
                <Route path="search"
                       element={<Search/>}/>
            </Routes>
        </Provider>
    );
}
export default Eventory;