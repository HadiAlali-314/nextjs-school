import React from "react";
import styles from "./join.module.css";
const JoinUS = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Practice Advice</h1>
            <h2>JOIN US</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <label className={styles.mylabel}>
            <input type="email" placeholder="Your Email" />
            <button>submit</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default JoinUS;
