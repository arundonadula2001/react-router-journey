import React from "react";
import { Routes, Route, Link, } from "react-router-dom";
import VansList from "./components/VansList";

import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import VanDetail from "./components/VanDetail";

function App() {
  return (
    <div>
      <nav className="nav">
       <Link to="/" className="Logo">#VANLIFE</Link>
        <div className="nav-items">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<VansList />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <footer className="footer">
        <p>Copyright 2024 &copy; #VANLIFE</p>
      </footer>
    </div>
  );
}

export default App;