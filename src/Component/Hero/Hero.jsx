import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Safadr Ansari</h1>
        <p className={styles.description}>
          I am seeking a dynamic engineering role where I can apply my expertise
          as a MERN Stack Web Developer, leveraging strong problem-solving
          skills and proficiency in JavaScript frameworks to contribute ,
          innovative and scalable web solutions. Driven by a passion for
          responsive design and efficient back-end integration, I aspire to
          collaborate on cutting-edge projects that promote continuous learning
          and advancement in web development..
        </p>
        <a href="ansariwork166@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("saf.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
