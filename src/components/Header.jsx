import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

function Header() {
    return (
    <nav className="nav">
       <NavLink to="/" className="Logo">#VANLIFE</NavLink>
        <div className="nav-items">
        <NavLink className={({isActive}) => isActive ? "active" : ""}
        to="/host"
        >Host</NavLink>

        <NavLink 
        to="/about"
        className={({isActive}) => isActive ? "active" : ""}
        >About</NavLink>

        <NavLink 
        to="/vans"
        className={({isActive}) => isActive ? "active" : ""}
        >Vans</NavLink>
        
        </div>
    </nav>
    )
}
export default Header;