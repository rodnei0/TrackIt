import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/LoginPage";
import SingUp from "./components/SignUpPage";
import Today from './components/Today';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SingUp />} />
                <Route path="/hoje" element={<Today />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;