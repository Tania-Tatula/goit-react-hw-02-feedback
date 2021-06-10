import React, { Component } from "react";
import styles from "./Feedback.module.css";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutralFeedback = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBadFeedback = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    let total = this.countTotalFeedback();
    let positiveFeedback = ((this.state.good * 100) / total).toFixed();
    return positiveFeedback;
  }

  render() {
    return (
      <div className={styles.feedbackBlock}>
        <h1 className={styles.title}>Please leave feedback</h1>

        <FeedbackOptions
          handleGoodFeedback={this.handleGoodFeedback}
          handleNeutralFeedback={this.handleNeutralFeedback}
          handleBadFeedback={this.handleBadFeedback}
        />

        {this.countTotalFeedback() === 0 ? (
          <Notification message='No feedback given' />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default Feedback;
