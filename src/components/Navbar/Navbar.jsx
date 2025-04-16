import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#ff0000",
  };

  return (
    <nav className={"pt-3 " + styles.navbar}>
      <NavLink className="" to="/">
        <img className={styles.navLogo} src="logo/logo.png" alt="" />
      </NavLink>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "nav/closeIcon.png"
              : "nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <strong>Home</strong>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <strong> Courses</strong>
            </NavLink>
          </li>
          <li>
            <NavLink to="/ask-doubt" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <strong> Ask doubt</strong>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <strong> Contact</strong>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
