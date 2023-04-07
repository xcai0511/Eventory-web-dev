import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Eventory from "./eventory";

function App() {
    return (
        <div className="container">
            <h1>Hello World!</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/*"
                           element={<Eventory/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
