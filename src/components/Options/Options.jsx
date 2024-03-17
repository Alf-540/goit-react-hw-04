import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, updateTotal }) => {
  return (
    <>
      <button className={css.button} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={() => updateTotal()}>
          Reset
        </button>
      )}
    </>
  );
};
export default Options;
