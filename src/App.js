import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from "./components/LoginPage";
import SingUp from "./components/SignUpPage";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const data = {
        email: email,
        setEmail: setEmail,
        password: password,
        setPassword: setPassword,
        name: name,
        setName: setName,
        image: image,
        setImage: setImage
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login {...data}/>} />
                <Route path="/signup" element={<SingUp  {...data}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;