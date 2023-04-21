import React from "react";
import "./index.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="eventory-footer bg-light mt-2">
            <div className="container">
                <span className="logo-container">
                    <img src="/images/eventory-logo-text-only.png" width={80}/>
                    <p className="mt-2 ms-3">&copy; Eventory {year}</p>
                </span>
            </div>
        </footer>
    )
};

export default Footer;