import React from "react";
import styles from "./Feedback.module.css";
import PropTypes from 'prop-types';


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

Notification.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
}

export default Statistics;
