import { useEffect, useState } from 'react';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export const App = () => {
  const innitialContactList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const contactsLocalStorage = window.localStorage.getItem('contacts-list');

    if (contactsLocalStorage !== null) {
      return JSON.parse(contactsLocalStorage);
    }

    return innitialContactList;
  });

  useEffect(() => {
    window.localStorage.setItem('contacts-list', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox value={filter} handleFilter={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
