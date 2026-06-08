import React from "react";
import { Routes, Route, Link, } from "react-router-dom";
import VansList from "./components/VansList";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import VanDetail from "./components/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Reviews from "./components/Host/reviews";
import HostLayout from "./components/HostLayout";
import VansHost from "./components/Host/VansHost";
import VanHostDetail from "./components/Host/VanHostDetail";

function App() {
  return (
    <div className="app">
        <Routes>
        <Route  element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<VansList />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />}/>
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<VansHost />} />
            <Route path="vans/:id" element={<VanHostDetail />} />
            <Route path="dashboard" element={<Dashboard />} />
            
          </Route>
          
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;