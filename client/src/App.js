import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import About from './components/About';

function App() {
    return <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/marketplace' element={<Marketplace />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    </>
}

export default App;