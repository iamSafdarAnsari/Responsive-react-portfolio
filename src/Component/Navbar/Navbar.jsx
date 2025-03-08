import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.company}>
      <img
        src={getImageUrl("logo.png")}
        className="logo"
        alt="My Local Image"
      />

      <a className={styles.title} href="/" aria-label="Home">
        Saf WebWorks
      </a>
      </div>
     
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          {["Home", "About", "Our Work", "Projects", "Contact Us"].map(
            (item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} aria-label={item}>
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};
