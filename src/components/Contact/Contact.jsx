import css from './Contact.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <p className={css.text}>🧑{name}</p>
      <p className={css.text}>📳{number}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
