import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={"pt-3 "+styles.navbar}>
      <a className="" href="/">
        <img className={styles.navLogo} src="logo/logo.png" alt="" />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ?  "../../../assets/nav/closeIcon.png"
              :  "../../../assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <NavLink to="/courses" >Courses</NavLink>
          </li>
          <li>
            <NavLink to="/ask-doubt">Ask doubt</NavLink>
          </li>
          <li>
            <NavLink>Study material</NavLink>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
