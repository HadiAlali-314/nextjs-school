import React from "react";
import styles from "./client.module.css";
const ClientSection = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textsection}>
            <h4>Practice Advice</h4>
            <h1>Each and every client is important.</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="/person1.png" alt="" />
              <p>
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year.
              </p>
              <h1>Regina Miles</h1>
              <h2>Designer</h2>
            </div>
            <div className={styles.card}>
              <img src="/person2.png" alt="" />
              <p>
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year.
              </p>
              <h1>Regina Miles</h1>
              <h2>Designer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
