import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar/ResponsiveAppBar';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import About from './components/About';
import UserLogin from './components/User/UserLogin';
import UserSignup from './components/User/UserSignup';

function App() {
    return <>
        <Router>
            <ResponsiveAppBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/marketplace' element={<Marketplace />} />
                <Route path='/about' element={<About />} />
                <Route path='/user-login' element={<UserLogin />} />
                <Route path='/user-signup' element={<UserSignup />} />
            </Routes>
        </Router>
    </>
}

export default App;