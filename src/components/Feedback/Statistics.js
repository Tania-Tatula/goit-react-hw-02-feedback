import React from "react";
import styles from "./Feedback.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2 className={styles.title}>Statistics</h2>
    <span className={styles.info}>Good:{good}</span>
    <span className={styles.info}>Neutral:{neutral}</span>
    <span className={styles.info}>Bad:{bad}</span>
    <span className={styles.info}>Total:{total}</span>
    <span className={styles.info}>Positive feedback:{positivePercentage}%</span>
  </>
);

export default Statistics;
