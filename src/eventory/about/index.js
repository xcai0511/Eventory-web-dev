import React from 'react'
import './index.css'
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../footer";

const libraries = ["places"];
const mapContainerStyle = {
    height: "50vh",
    width: "100%",
};
const center = {
    address: "151 N First Street, Cambridge, Massachusetts",
    lat: 42.372750,
    lng: -71.075730,
};

export default function AboutComponent() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAqm6Mu_tJ9drMGEHcGz6o7mMdT1Jm3Lbg",
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <>
            <div className="container mb-4">
                <div className="row mt-4">
                    <h2>About Eventory</h2>
                </div>
                <div className="row">
                    <p>
                        Eventory is an event management company based out of Massachusetts.
                        We specialize in helping users find the perfect Massachusetts-wide events.
                        We also help event organizers plan an event right from our website. Organizers
                        can also view who is interested in attending their event.
                    </p>
                </div>
                <hr/>
                <div className="row mb-2">
                    <h3>The Team</h3>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <h5 className="about-name">Jaime Si</h5>
                        <a href="https://www.linkedin.com/in/jaimesi" target="_blank">
                            <i className="bi bi-linkedin text-decoration-none about-icons me-2"></i>
                        </a>
                        <a href="https://github.com/jaimesi" target="_blank">
                            <i className="bi bi-github text-decoration-none about-icons"></i>
                        </a>
                        <p>Hailing from Toronto, Canada, Jaime joined Northeastern's
                            Computer Science Align Program in 2021. Since then, she has
                            grown an interest in UX design and front-end development. She
                            hopes to continue growing her skills after graduation by building
                            a web development company.
                        </p>
                    </div>
                    <div className="col-sm">
                        <h5 className="about-name">Xinyu Hou</h5>
                        <a href="https://www.linkedin.com/in/xinyu-hou-db0223/" target="_blank">
                            <i className="bi bi-linkedin text-decoration-none about-icons me-2"></i>
                        </a>
                        <a href="https://github.com/xinyu-hou" target="_blank">
                            <i className="bi bi-github text-decoration-none about-icons"></i>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <h5 className="about-name">Xiaojin Cai</h5>
                        <a href="https://www.linkedin.com/in/xiaojin-cai-715a38180/" target="_blank">
                            <i className="bi bi-linkedin text-decoration-none about-icons me-2"></i>
                        </a>
                        <a href="https://github.com/xcai0511" target="_blank">
                            <i className="bi bi-github text-decoration-none about-icons"></i>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="col-sm">
                        <h5 className="about-name">Jianqing Ma</h5>
                        <a href="https://www.linkedin.com/in/jianqing-ma-918151190/" target="_blank">
                            <i className="bi bi-linkedin text-decoration-none about-icons me-2"></i>
                        </a>
                        <a href="https://github.com/jianqing77" target="_blank">
                            <i className="bi bi-github text-decoration-none about-icons"></i>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm mt-3">
                        <Map />
                    </div>
                    <div className="col-sm mt-3">
                        <div>
                            <h4>Eventory HQ</h4>
                            <p className="mb-0">151 N First St</p>
                            <p className="mt-0">Cambridge, MA 02141</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

function Map() {
    return (
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center}></GoogleMap>
    );
}
