import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../../public/logo.png";
import menu from "../../../public/menu.png";
const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
          <span>EliteEstates</span>
        </a>
        <a href="#/home">Home</a>
        <a href="#/about">About</a>
        <a href="#/content">Content</a>
        <a href="#/agents">Agents</a>
      </div>
      <div className="right">
        <a href="">Sign in</a>
        <a href="" className="register">Sign up</a>
        <div className="menuIcon">
          <img src={menu} alt="menu" onClick={()=>setOpen(!open)} />
        </div>
        <div className={open ? "menu active" :"menu"}>
        <a href="#/home">Home</a>
        <a href="#/about">About</a>
        <a href="#/content">Content</a>
        <a href="#/agents">Agents</a>
        <a href="#/signin">Sign in</a>
        <a href="signup">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
