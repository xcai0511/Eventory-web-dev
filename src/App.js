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
          </Routes>
        </BrowserRouter>
      </div>
  )
};

export default App;