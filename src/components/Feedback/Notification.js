import React from "react";
import styles from "./Feedback.module.css";
import PropTypes from 'prop-types';


const Notification = ({ message }) => (
  <>
    <h2 className={styles.title}>{message}</h2>
  </>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;
