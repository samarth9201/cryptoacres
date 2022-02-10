import React, { useState } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar/ResponsiveAppBar';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import About from './components/About';
import UserLogin from './components/User/UserLogin';
import UserSignup from './components/User/UserSignup';
import { isUserLoggedIn } from './utils/AuthenticateUser';
import BrokerLogin from './components/Broker/BrokerLogin';

function App() {

    const [logInStatus, setLogInStatus] = useState(isUserLoggedIn());

    return <>
        <Router>
            <ResponsiveAppBar 
                logInStatus = {logInStatus}
                setLogInStatus = {setLogInStatus}
            />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/marketplace' element={<Marketplace />} />
                <Route path='/about' element={<About />} />
                <Route path='/user-login' element={<UserLogin logInStatus = {logInStatus} setLogInStatus = {setLogInStatus} />} />
                <Route path='/user-signup' element={<UserSignup logInStatus = {logInStatus} setLogInStatus = {setLogInStatus} />} />
                <Route path='/broker-login' element={<BrokerLogin />} />
            </Routes>
        </Router>
    </>
}

export default App;