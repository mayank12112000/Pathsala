import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={"pt-3 "+ styles.navbar}>
      <NavLink className="" to="/">
        <img className={styles.navLogo} src="logo/logo.png" alt="" />
      </NavLink>
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
            <NavLink to="/courses" ><strong> Courses</strong></NavLink>
          </li>
          <li>
            <NavLink to="/ask-doubt"><strong> Ask doubt</strong></NavLink>
          </li>
          <li>
            <NavLink to="study-material"><strong> Study material</strong></NavLink>
          </li>
          <li>
            <NavLink to="/contact"><strong> Contact</strong></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
