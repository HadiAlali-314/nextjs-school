import React from "react";
import styles from "./watch.module.css";
const WatchSection = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftsection}>
            <img src="/yup.jpg" alt="" />
          </div>
          <div className={styles.rightsection}>
            <div className={styles.redline}></div>
            <h1>Watch our Courses</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
            <h2>Learn More..</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchSection;
