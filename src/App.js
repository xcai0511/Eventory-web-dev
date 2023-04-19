import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Eventory from './eventory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="container">
            <ToastContainer />
            <h1>Hello World!</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Eventory />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
