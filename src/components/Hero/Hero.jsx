import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";
import { NavLink } from "react-router-dom";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Learn, Grow, Rise</h1>
        <p className={styles.description}>
          Knowledge should never be a priveldge, but a right!
        </p>
        <div>
          <NavLink to="/course" className={styles.contactBtn}>
            Explore Courses
          </NavLink>
          
        </div>
      </div>
      <img
        src="logo/hero-logo.jpg"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
