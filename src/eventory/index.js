import {Routes, Route} from "react-router";
import Nav from "../nav";
import Home from "./home";
import Signup from "./signup";
import Signin from "./signin";
import Search from "./search";
import userReducer from "./signup/signup-reducer";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

function Eventory() {
    return(
        <div>
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
        </div>
    );
}
export default Eventory;