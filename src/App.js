
import SearchResult from "./search-events";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Eventory from "./eventory";
import {ToastContainer} from "react-toastify";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <div className="container-fluid">
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/*"
                   element={<Eventory/>}/>
            <Route path="/results/*" element={<SearchResult/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
};

export default App;