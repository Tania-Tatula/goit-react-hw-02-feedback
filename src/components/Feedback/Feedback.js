import React from "react";
import styles from './Feedback.module.css';


class Feedback extends React.Component {
state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


      handleGoodFeedback = () =>{
          this.setState(prevState => ({
            good: prevState.good + 1,
          }))
      };
      handleNeutralFeedback = () =>{
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
      };
      handleBadFeedback = () =>{
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
      };

      countTotalFeedback(){
          let total = this.state.good + this.state.neutral + this.state.bad;
          return total;
      }
    
      countPositiveFeedbackPercentage(){
          let total = this.countTotalFeedback();
          let positiveFeedback = (this.state.good * 100 / total).toFixed();
          return positiveFeedback;
      }


  render(){
    return (
      <div className={styles.feedbackBlock}>
        <h1 className={styles.title}>Please leave feedback</h1>
        <button className={styles.button} onClick = {this.handleGoodFeedback}>Good</button>
        <button className={styles.button} onClick = {this.handleNeutralFeedback}>Neutral</button>
        <button  className={styles.button} onClick = {this.handleBadFeedback}>Bad</button>
        <h2 className={styles.title}>Statistics</h2>
        <span className={styles.info}>Good:{this.state.good}</span>
        <span className={styles.info}>Neutral:{this.state.neutral}</span>
        <span className={styles.info}>Bad:{this.state.bad}</span>
        <span className={styles.info}>Total:{this.countTotalFeedback()}</span>
        <span className={styles.info}>Positive feedback:{this.countPositiveFeedbackPercentage()}%</span>
      </div>
    );
  }
}

export default Feedback;
