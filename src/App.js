import SearchResult from "./test";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Eventory from "./eventory";

function App() {
  return (
      <div className="container-fluid">
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