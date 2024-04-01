import css from './ContactForm.module.css';

import { useId } from 'react';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function ContactForm({ onAddContact }) {
  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css.field}
          type="text"
          name="name"
          placeholder="Jorik Jorik"
          id={nameFieldId}
        />
        <ErrorMessage component="span" name="name" />

        <label className={css.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.field}
          type="text"
          name="number"
          placeholder="Jorik phone number"
          id={numberFieldId}
        />
        <ErrorMessage component="span" name="number" />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
