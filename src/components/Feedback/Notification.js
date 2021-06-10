import React from "react";
import styles from "./Feedback.module.css";

const Notification = ({ message }) => (
  <>
    <h2 className={styles.title}>{message}</h2>
  </>
);

export default Notification;
