import { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar/SearchBar.jsx';

import css from './App.module.css';

export default function App() {
  const [, set] = useState();

  useEffect();

  return (
    <div className={css.container}>
      {/* <ContactForm onAddContact={addContact} /> */}
      <SearchBar value={filter} onFilter={setFilter} />
      {/* <ContactList contacts={visibleContact} onDelete={deleteContact} /> */}
    </div>
  );
}
