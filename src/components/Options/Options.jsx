import css from './Options.module.css';

const Options = () => {
  return(
    <>
    <button onClick={() => console.log("Click!")} className={css.button}>👍 Good</button>
    <button onClick={() => console.log("Click!")} className={css.button}>👌 Neutral</button>
    <button onClick={() => console.log("Click!")} className={css.button}>👎 Bad</button>
    <button onClick={() => console.log("Click!")} className={css.button}>❌ Reset</button>
    </>
  );
};
export default Options;
