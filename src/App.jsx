import ContactList from './components/ContactList/ContactList.jsx';
import initialContacts from './../Phonebook.json';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';

import css from './App.module.css';

import { useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </div>
  );
}
