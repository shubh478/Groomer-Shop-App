import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import BackgroundImage1 from "../assets/BackgroundImage1.svg";
import styles from "./HomePage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepageContainer}>
      <div
        className={styles.headerContainer}
        style={{ backgroundImage: `url(${BackgroundImage1})` }}
      >
        <Header />
        <div className={styles.sectionTitle}>
          <div>
            The Story Behind Our <br /> Scissors' Symphony
          </div>
        </div>
      </div>

      <Home />
      <Footer />
    </div>
  );
};

export default Homepage;
