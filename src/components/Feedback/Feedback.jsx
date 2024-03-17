import css from './Feedback.module.css';
import Options from '../Options/Options';

const Feedback = Options => {
  return (
    <>
      <ul className={css.list}>
        {/* {totalFeedback === 0 && (
          <p className={css.notificationText}>No feedback yet</p>
        )} */}
        <li className={css.item}>Good: {}</li>
        <li className={css.item}>Neutral:{}</li>
        <li className={css.item}>Bad:{}</li>
        {Options.totalFeedback > 0(<li>Total: {}</li>)}
      </ul>
    </>
  );
};
// export default Feedback;
