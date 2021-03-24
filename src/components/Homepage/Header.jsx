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
        <NavLink exact className="nav-link" activeClassName="active_class" to="/company">Company</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle"  exact activeClassName="active_class" to="/services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Services
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/services">Process Engineering</NavLink>
          <NavLink className="dropdown-item" to="/services">Pipeline Engineering</NavLink>
          <NavLink className="dropdown-item" to="/services">Piping Engineering</NavLink>
          <NavLink className="dropdown-item" to="/services">Safety & Risk Assessment</NavLink>
          <div className="dropdown-divider"></div>
          <NavLink className="dropdown-item" to="/services">Mechanical Engineering</NavLink>
          <NavLink className="dropdown-item" to="/services">Civil & Structural Engineering</NavLink>
          <NavLink className="dropdown-item" to="/services">Electrical & Instrumentation Engineering</NavLink>
          <NavLink className="dropdown-item" to="/services">Field Instrumentation, Control & Automation</NavLink>
          <div className="dropdown-divider"></div>
          <NavLink className="dropdown-item" to="/services">3D Modeling & Laser Scanning Services</NavLink>
          <NavLink className="dropdown-item" to="/services">Specialty Engineering Services</NavLink>
          <NavLink className="dropdown-item" to="/services">EPC Manpower Supply / PMC Services</NavLink>
          <NavLink className="dropdown-item" to="/services">Technical & Software Training Services</NavLink>
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
