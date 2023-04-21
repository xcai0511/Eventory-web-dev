import {BrowserRouter, Route, Routes} from "react-router-dom";
import Eventory from "./eventory";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import eventReducer from "./reducers/organizerEvent-reducer";
import eventsReducer from "./reducers/organizerEvents-reducer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ticketmasterEventReducer from "./reducers/ticketmaster-event-reducer";
import eventoryEventReducer from "./reducers/eventory-event-reducer";


const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        organizersEvent: eventReducer,
        organizersEvents: eventsReducer,
        result: ticketmasterEventReducer,
        usersEvent: eventoryEventReducer
    }
});

function App() {
  return (
      <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
          <div className="container-fluid">
              <Routes>
                <Route path="/*"
                       element={<Eventory/>}/>
              </Routes>
          </div>
      </BrowserRouter>
      </Provider>
  )
}

export default App;

{/*import SearchResult from "./search-events";*/}
{/*import {BrowserRouter, Route, Routes} from "react-router-dom";*/}
{/*import Eventory from "./eventory";*/}
{/*import {ToastContainer} from "react-toastify";*/}
{/*import React from "react";*/}
{/*import 'react-toastify/dist/ReactToastify.css';*/}

{/*function App() {*/}
{/*  return (*/}
{/*      <div className="container-fluid">*/}
{/*        <ToastContainer />*/}
{/*        <BrowserRouter>*/}
{/*          <Routes>*/}
{/*            <Route path="/*"*/}
{/*                   element={<Eventory/>}/>*/}
{/*          </Routes>*/}
