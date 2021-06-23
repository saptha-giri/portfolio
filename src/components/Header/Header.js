import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg"

const Header = () => {
    return (
        <nav className="nav-bar">
            <img src={logo} className="logo" alt="sapthagiri" />
            <a href="/"><span>Contact</span></a>
        </nav>
    );
}

export default Header;
