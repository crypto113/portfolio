import React from "react";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";

import "./Header.css";

function Header(props) {
  const theme = props.theme;

  const link = settings.isSplash ? "/splash" : "home";

  return (
    <header className="header">
      <NavLink to={link} tag={Link} className="logo">
        <span style={{ color: theme.text }}></span>
        <span className="logo-name" style={{ color: theme.text }}>
          {greeting.logo_name}
        </span>
        <span style={{ color: theme.text }}></span>
      </NavLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <NavLink
            className="homei"
            to="/home"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Home
              </NavLink>
        </li>
        <li>
          <NavLink
            className="homei"
            to="/education"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Education and Certifications
              </NavLink>
        </li>
        <li>
          <NavLink
            className="homei"
            to="/experience"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Experience
              </NavLink>
        </li>
        <li>
          <NavLink
            className="homei"
            to="/projects"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Projects
              </NavLink>
        </li>
        <li>
          <NavLink
            className="homei"
            to="/contact"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Contact and Resume
              </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
