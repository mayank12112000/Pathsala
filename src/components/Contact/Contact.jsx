import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <i class="fa fa-envelope fs-5" aria-hidden="true"></i>
          <a target="_blank" href="mailto:mayank.keshari.93@gmail.com">mayank.keshari.93@gmail.com</a>
        </li>
        <li className={styles.link}>
        <i class="fa fa-linkedin-square fs-5" aria-hidden="true"></i>
          <a target="_blank" href="https://www.linkedin.com/in/mayank-k1211/">linkedin.com/mayank</a>
        </li>
        <li className={styles.link}>
        <i class="fa fa-instagram fs-5" aria-hidden="true"></i>
          <a target="_blank" href="https://www.instagram.com/mayank_pathshala/">Mayank's Pathshala</a>
        </li>
      </ul>
    </footer>
  );
};
