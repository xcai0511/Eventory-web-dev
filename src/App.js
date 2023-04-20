import {BrowserRouter, Route, Routes} from "react-router-dom";
import Eventory from "./eventory";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import eventReducer from "./reducers/organizerEvent-reducer";
import eventsReducer from "./reducers/organizerEvents-reducer";


const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        event: eventReducer,
        events: eventsReducer
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