import styles from "./Feedback.module.css";

const Feedback = ({ feedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;
  return (
    <div className={styles.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive: {positiveFeedback} % </p>
    </div>
  );
};

export default Feedback;
