import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";


function Header() {
  return (
    <nav className="navbar header fixed-top navbar-expand-sm navbar-light bg-light">
    <div className="container-fluid">
   <NavLink className="navbar-brand" to="/">
    <img src="/img/other/chandan-tech-300x293.png" alt="logo"/>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact activeClassName="active_class" to="/">Home</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink exact className="nav-link" exact activeClassName="active_class" to="/company">Company</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle"  exact activeClassName="active_class" to="/services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Services
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Process Engineering</a>
          <a className="dropdown-item" href="#">Pipeline Engineering</a>
          <a className="dropdown-item" href="#">Piping Engineering</a>
          <a className="dropdown-item" href="#">Safety & Risk Assessment</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Mechanical Engineering</a>
          <a className="dropdown-item" href="#">Civil & Structural Engineering</a>
          <a className="dropdown-item" href="#">Electrical & Instrumentation Engineering</a>
          <a className="dropdown-item" href="#">Field Instrumentation, Control & Automation</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">3D Modeling & Laser Scanning Services</a>
          <a className="dropdown-item" href="#">Specialty Engineering Services</a>
          <a className="dropdown-item" href="#">EPC Manpower Supply / PMC Services</a>
          <a className="dropdown-item" href="#">Technical & Software Training Services</a>
        </div>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" exact activeClassName="active_class" to="/projects">Projects</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" exact activeClassName="active_class" to="/career">Career</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" exact activeClassName="active_class" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>
  );
}

export default Header;
