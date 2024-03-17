import css from './Feedback.module.css';

const Feedback = ({ types, totalFeedback, positiveStatistics }) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>Good: {types.good}</li>
        <li className={css.item}>Neutral: {types.neutral}</li>
        <li className={css.item}>Bad: {types.bad}</li>
        <li className={css.item}>Total: {totalFeedback}</li>
        <li className={css.item}>Positive: {positiveStatistics}%</li>
      </ul>
    </>
  );
};

export default Feedback;
