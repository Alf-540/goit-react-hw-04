import css from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
  const handleSubmit = e => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.field} type="text" name="name" />
      <input className={css.field} type="text" name="number" />
      <button type="submit">Add contact</button>
    </form>
  );
}
