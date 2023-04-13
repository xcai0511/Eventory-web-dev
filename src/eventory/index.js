import Nav from "../nav";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        // user: userReducer,
        // auth: authReducer,
    }
});

function Eventory() {
    return(
        <Provider store={store}>
            <Nav/>
        </Provider>
    );
}
export default Eventory;
