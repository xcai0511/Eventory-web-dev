// TODO: DELETE
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router';
// const NavbarAnonymous = () => {
//     const { pathname } = useLocation();
//     const paths = pathname.split('/');
//     const active = paths[2] ? paths[2] : 'about';
//
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container">
//                 <a className="navbar-brand" href="#">
//                     <img
//                         src="../../../public/images/eventory-logo.png"
//                         alt="Eventory Event Management"
//                         width="60"></img>
//                 </a>
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navigation-bar"
//                     aria-controls="navigation-bar"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//
//                 <div className="collapse navbar-collapse" id="navigation-bar">
//                     <ul className="navbar-nav mx-auto">
//                         <Link
//                             to="/eventory/about/"
//                             className={`nav-item ms-lg-5 me-4
//                             ${active === 'about' ? 'active' : ''}`}>
//                             <div className="nav-link">About</div>
//                         </Link>
//                         <Link
//                             to="/eventory/exclusives/"
//                             className={`nav-item ms-lg-2 me-4
//                             ${active === 'exclusives' ? 'active' : ''}`}>
//                             <div className="nav-link">Eventory Exclusives</div>
//                         </Link>
//                         <Link
//                             to="/eventory/exclusives/"
//                             className={`nav-item ms-lg-2 me-4
//                             ${active === 'contact' ? 'active' : ''}`}>
//                             <div className="nav-link">Contact</div>
//                         </Link>
//                     </ul>
//                     <ul className="navbar-nav ms-auto">
//                         <Link
//                             to="/eventory/signin/"
//                             className={`nav-item
//                             ${active === 'signin' ? 'active' : ''}`}>
//                             <div className="nav-link">Log in</div>
//                         </Link>
//                         <Link
//                             to="/eventory/signup/"
//                             className={`nav-item
//                             ${active === 'signup' ? 'active' : ''}`}>
//                             <div className="nav-link">Sign up</div>
//                         </Link>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };
// export default NavbarAnonymous;
