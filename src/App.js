import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/LoginPage";
import SingUp from "./components/SignUpPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SingUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;