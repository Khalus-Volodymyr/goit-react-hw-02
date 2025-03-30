import styles from "./Options.module.css";

const Options = ({ onFeedback, totalFeedback, onReset }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutrald</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
      {totalFeedback > 0 ? (
        <button onClick={() => onReset("reset")} className={styles.butReset}>
          {" "}
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
