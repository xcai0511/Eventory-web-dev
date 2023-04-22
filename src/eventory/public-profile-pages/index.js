import React from "react";

import PublicUserProfile from "./public-user-profile";
import {Route, Routes} from "react-router-dom";
import PublicOrganizerProfile from "./public-organizer-profile";

const PublicProfilePages = () => {
    return (
            <div>
                <Routes>
                    <Route path="/user/*" element={<PublicUserProfile/>}/>
                    <Route path="/organizer/*" element={<PublicOrganizerProfile/>}/>
                </Routes>
            </div>
        );

};
export default PublicProfilePages;
