import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
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
  // Save and update Local Storage
  const [contacts, setContacts] = useState(() => {
    const contactsLocalStorage = window.localStorage.getItem('contacts-list');

    if (contactsLocalStorage === null) {
      return innitialContactList;
    }else return JSON.parse(contactsLocalStorage);
  });

  useEffect(() => {
    window.localStorage.setItem('contacts-list', JSON.stringify(contacts));
  }, [contacts]);

  // Logic of filtering contacts
  const [filter, setFilter] = useState('');

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  //Logic of adding new contact
  const updateContacts = formData => {
    const newContact = { ...formData, id: nanoid() };
    setContacts(prewState => [...prewState, newContact]);
  };
  // logic of deleting contact
  const deleteContact = contactId => {
    console.log(contactId);
    setContacts(prewState => {
      return prewState.filter(contact => contact.id !== contactId);
    });
  };

  // rendering component
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm updateContacts={updateContacts} />
      <SearchBox value={filter} handleFilter={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
