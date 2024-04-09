import React from "react";
import styles from "./Home.module.css";
import FounderImage1 from "../../assets/FounderImage1.svg";
import FounderImage2 from "../../assets/FounderImage2.svg";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.founderSectionContainerMain}>
        <div className={styles.founderSectionContainer}>
          <div className={styles.founderSection}>
            <div className={styles.founder}>
              <img
                src={FounderImage1}
                alt="Founder Image 1"
                className={styles.founderImage}
              />
              <div className={styles.founderName}>Sumanth Vartha</div>
              <div className={styles.founderRole}>Founder And CEO</div>
              <div className={styles.founderDescription}>
                Marketeer | Businesswoman
              </div>
            </div>
            <div className={styles.founder}>
              <img
                src={FounderImage2}
                alt="Founder Image 2"
                className={styles.founderImage}
              />
              <div className={styles.founderName}>Praveen Ruperi</div>
              <div className={styles.founderRole}>Co-Founder</div>
              <div className={styles.founderDescription}>
                Veteran Hairdresser
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shape}></div>
      </div>
      <div className={styles.testimonialSection}>
        <div className={styles.sectionTitle}>A Word by the Founders</div>
        <div className={styles.testimonial}>
          "Incredibly welcoming salon with attentive staff and stylish ambiance.
          My stylist understood my needs perfectly, delivering an exceptional
          haircut that exceeded expectations. The attention to detail and
          precision were impressive, leaving me feeling confident and
          rejuvenated. This salon is a true gem for top-notch grooming services.
          Highly recommend!"
        </div>
        <div className={styles.founderNameTestimonial}>— Praveen</div>
        <div className={styles.dot}>
          <div className={styles.dot1}></div>
          <div className={styles.dot2}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
