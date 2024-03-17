import css from './Options.module.css';

const Options = () => {
  return (
    <>
      <button onClick={() => console.log('Click!')} className={css.button}>
        Good
      </button>
      <button onClick={() => console.log('Click!')} className={css.button}>
        Neutral
      </button>
      <button onClick={() => console.log('Click!')} className={css.button}>
        Bad
      </button>
      {/* {
        (onClick = true ? (
          <button onClick={() => console.log('Click!')} className={css.button}>
            Reset
          </button>
        ) : null)
      } */}
    </>
  );
};
export default Options;
