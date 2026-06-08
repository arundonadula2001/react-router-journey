/* Link.jsx
link : is a react version of anchor , which will not 
cause page refresh and will not lose the state of the app
syntax : <Link to='path'>link text</Link>
the link has to attach inside the BrowserRouter component
*/
import React from "react";
import { Routes, Route, Link, } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <nav>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

    </Routes>
    </div>
  );
}

export default App;