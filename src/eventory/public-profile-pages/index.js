import React from "react";

import PublicUserProfile from "./public-user-profile";
import {Route, Routes} from "react-router-dom";
import PublicOrganizerProfile from "./public-organizer-profile";

const PublicProfilePages = () => {
    return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '800px',
                margin: 'auto',
            }}>
                <Routes>
                    <Route path="/user/*" element={<PublicUserProfile/>}/>
                    <Route path="/organizer/*" element={<PublicOrganizerProfile/>}/>
                </Routes>
            </div>
        );

};
export default PublicProfilePages;
