import css from './Contact.module.css';

import { FaPhone } from 'react-icons/fa6';
import { FaUserLarge } from 'react-icons/fa6';

export default function Contact({ name, number, id, onDelete }) {
  return (
    <div className={css.container}>
      <p className={css.text}>
        <FaUserLarge className={css.icon} />
        {name}
      </p>
      <p className={css.text}>
        <FaPhone className={css.icon} />
        {number}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
