import React from "react";

import PublicUserProfile from "./public-user-profile";
import {Route, Routes} from "react-router-dom";

const PublicProfilePages = () => {
    return (
            <div>
                <Routes>
                    <Route path="/user" element={<PublicUserProfile/>}/>
                </Routes>
            </div>
        );

};
export default PublicProfilePages;
