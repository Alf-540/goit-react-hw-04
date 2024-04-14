import css from './Loader.module.css';
import { Vortex } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.container}>
      render
      <Vortex
        height="80"
        width="80"
        color="#646cff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
