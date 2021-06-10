import React from "react";
import styles from "./Feedback.module.css";

const FeedbackOptions = ({
  handleGoodFeedback,
  handleNeutralFeedback,
  handleBadFeedback,
}) => (
  <>
    <button className={styles.button} onClick={handleGoodFeedback}>
      Good
    </button>
    <button className={styles.button} onClick={handleNeutralFeedback}>
      Neutral
    </button>
    <button className={styles.button} onClick={handleBadFeedback}>
      Bad
    </button>
  </>
);
export default FeedbackOptions;
