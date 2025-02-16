import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Planet from "./pages/Planet/Planet";
import Home from "./pages/Home/Home"; // Если у вас есть главная страница

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:planetName" element={<Planet />} /> 
            </Routes>
        </Router>
    );
};

export default App;
