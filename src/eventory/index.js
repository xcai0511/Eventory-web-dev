import Nav from "../nav";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../reducers/users-reducer";
import authReducer from "../reducers/auth-reducer";
import CreateEventForm from "./organizer-create-event";

const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
    }
});

function Eventory() {
    return(
        <Provider store={store}>
            <Nav/>
            <CreateEventForm/>
        </Provider>
    );
}
export default Eventory;
