import {BrowserRouter, Route, Routes} from "react-router-dom";
import Eventory from "./eventory";

function App() {
  return (
      <Provider store={store}>
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
};

export default App;