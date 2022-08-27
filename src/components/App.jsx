import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/Contactform';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Box } from './Box/Box';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const parsedItems = JSON.parse(localStorage.getItem('contacts'));
    return parsedItems ? parsedItems : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => setFilter(e.currentTarget.value);

  const onSubmitForm = data => {
    const isExist = contacts.map(e => e.name).includes(data.name);
    if (isExist) {
      alert('Name already exist');
      return;
    }
    setContacts(prevState => [...prevState, data]);
  };

  const deleteContact = id =>
    setContacts(prevState => prevState.filter(e => e.id !== id));

  const visibleContacts = contacts.filter(e =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Box display="flex">
      <Box ml="auto" mr="auto" textAlign="center">
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={onSubmitForm} />
        <h2>Contacts</h2>
        <Filter changeFilter={changeFilter} />
        <ContactList contacts={visibleContacts} deleteCon={deleteContact} />
      </Box>
    </Box>
  );
}
