import css from './Feedback.module.css';

const Feedback = () => {
  return (
    <>
    <ul className={css.list}>
      <li className={css.item}>Good: {}</li>
      <li className={css.item}>Neutral:{}</li>
      <li className={css.item}>Bad:{}</li>
    </ul>
    </>
  );
};
export default Feedback;
