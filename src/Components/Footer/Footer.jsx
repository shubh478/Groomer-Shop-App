import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import EmailIcon from "../../assets/EmailIcon.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";
import LocationIcon from "../../assets/LocationIcon.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.logoContainer}>
            <img src={Logo} alt="" className={styles.logo} />
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className={styles.icon} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <img src={EmailIcon} alt="" className={styles.icon} />
            <div>Groomer.online@gmail.com</div>
          </div>
          <div className={styles.contactItem}>
            <img src={PhoneIcon} alt="" className={styles.icon} />
            <div>+91 9876543210</div>
          </div>
          <div className={styles.contactItem}>
            <img src={LocationIcon} alt="" className={styles.icon} />
            <div>Hi-tech city, Hyderabad</div>
          </div>
        </div>
        <div className={styles.term}>
          <div className={styles.footerLink}>Terms and Conditions</div>
          <div className={styles.footerLink}>Privacy and Policy</div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.footerBottom}>
        <img src={Logo} alt="" className={styles.logo} />
        <span className={styles.copyRightText}>Copyright</span>

        <div>
          <div className={styles.copyrightIcon}>
            <span>c</span>
          </div>
        </div>
        <span>
          2024 GROOMER VOGUE AND BEAUTY PRIVATE LIMITED,. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
