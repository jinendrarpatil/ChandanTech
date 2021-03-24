import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import GetAppIcon from "@material-ui/icons/GetApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";


function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-lg-5">
          <ul className="sideIcons">
            <li>
              <a href="https://api.whatsapp.com/send?phone=919373501010&text=Hello%20ChandanTech%0AI%27m%20a%20visitor%20on%20your%20website%20Need%20to%20talk%20about">
                <CallIcon className="icon" fontSize="large" />
                <p id="iconPhone">020-66814444 / 9373501010</p>
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/place/Mitra+Nagar,+Model+Colony,+Shivajinagar,+Pune,+Maharashtra+411016,+India/@18.5302646,73.832969,18z/data=!3m1!4b1!4m5!3m4!1s0x3bc2bf791b47973b:0xd498cb11c6380470!8m2!3d18.5303955!4d73.8341872">
                <LocationOnIcon className="icon" fontSize="large" />{" "}
                <p id="iconAddress">
                  Head Office: Chandan Group, 1019/2 Datta Niwas, <br />
                  Deep Bungalow Chowk, Shivajinagar, Pune – 411016
                </p>
              </a>
            </li>
            <li>
              <a href="mailto:info@chandantech.com">
                <EmailIcon className="icon" fontSize="large" />
                <p id="iconEmail">info@chandantech.com </p>
              </a>
            </li>
            <li>
              <a href="/img/other/ChandanTech-Solutions-Brochure.pdf" download>
                <GetAppIcon className="icon" fontSize="large" />{" "}
                <p id="iconBroucher">Download Broucher</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 footerlogo">
        <NavLink className="navbar-brand" to="/">
    <img src="/img/other/chandan-tech-300x293.png" alt="logo"/>
  </NavLink>
          <h3>Follow us on</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/chandantechsolutions/"
                target="_blank" rel="noopener noreferrer"
              >
                <FacebookIcon className="icon" fontSize="large" />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/chandan-tech-solution/?originalSubdomain=in"
                target="_blank" rel="noopener noreferrer"
              >
                <LinkedInIcon className="icon" fontSize="large" />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=919373501010&text=Hello%20ChandanTech%0AI%27m%20a%20visitor%20on%20your%20website%20Need%20to%20talk%20about"
                target="_blank" rel="noopener noreferrer"
              >
                <WhatsAppIcon className="icon" fontSize="large" />
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 quickLinks">
          <h3>-Quick Links-</h3>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
  to="/company"
              >
                Company
              </NavLink>
            </li>
            <li>
              <NavLink  to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/career"
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div></div>
        <hr id="footeHrz" />
        <p>
          <span style={{ fontSize: "1.2rem" }}>©</span> {year} Chandan Tech
          Solutions. All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
}
export default Footer;
