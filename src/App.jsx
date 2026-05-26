import React from "react";
import { Routes, Route, Link, } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="nav">
       <Link to="/">#VANLIFE</Link>
       <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="footer">
        <p>Copyright 2024 &copy; #VANLIFE</p>
      </footer>
    </div>
  );
}

export default App;