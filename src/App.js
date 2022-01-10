import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bottom from './components/BottomBar';
import Habits from './components/Habits';
import History from './components/History';
import Login from "./components/LoginPage";
import SingUp from "./components/SignUpPage";
import Today from './components/Today';
import Top from './components/TopBar';
import PercentageContext from './contexts/PercentageContext';
import UserContext from './contexts/UserContext';

function App() {
    const [ mainPage, setMainPage ] = useState(true);
    const [ percentage, setPercentage ] = useState(0);
    const [ token, setToken ] = useState('');
    const [ image, setImage ] = useState('');

    return (
        <UserContext.Provider value={{token, setToken, image, setImage}}>
            <PercentageContext.Provider value={percentage}>
                <BrowserRouter>
                {!mainPage && <Top />}
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<SingUp />} />
                        <Route path="/hoje" element={<Today setMainPage={setMainPage} percentage={percentage} setPercentage={setPercentage}/>} />
                        <Route path="/habitos" element={<Habits setMainPage={setMainPage}/>} />
                        <Route path="/historico" element={<History setMainPage={setMainPage}/>} />
                    </Routes>
                {!mainPage && <Bottom />}
                </BrowserRouter>
            </PercentageContext.Provider>
        </UserContext.Provider>
    );
}

export default App;