import {BrowserRouter, Route, Routes} from "react-router-dom";
import Eventory from "./eventory";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import eventsReducer from "./reducers/organizerEvent-reducer";


const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        events: eventsReducer,
    }
});

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