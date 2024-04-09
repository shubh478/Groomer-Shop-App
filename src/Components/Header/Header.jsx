import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import UserIcon from "../../assets/UserIcon.svg";
import Dropdown from "../../assets/Dropdown.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Salons
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Shop
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.userContainer}>
        <img src={UserIcon} alt="User Icon" className={styles.userIcon} />
        <img
          src={Dropdown}
          alt="Dropdown Icon"
          className={styles.dropdownIcon}
        />
      </div>
    </header>
  );
};

export default Header;
