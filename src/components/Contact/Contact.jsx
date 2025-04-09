import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils.js";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a target="_blank" href="mailto:mayank.keshari.93@gmail.com">mayank.keshari.93@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a target="_blank" href="https://www.linkedin.com/in/mayank-k1211/">linkedin.com/mayank</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a target="_blank" href="https://www.github.com/mayank12112000">github.com/mayank</a>
        </li>
      </ul>
    </footer>
  );
};
