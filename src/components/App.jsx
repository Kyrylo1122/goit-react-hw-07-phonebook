import ContactForm from './ContactForm/Contactform';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Box } from './Box/Box';
import { addContact, removeContact, cFilter } from './redux/slice';

import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const reduxContacts = useSelector(state => state.contacts.items);

  const onSubmitForm = data => {
    const isExist = reduxContacts.map(e => e.name).includes(data.name);
    if (isExist) {
      alert('Name already exist');
      return;
    }
    dispatch(addContact(data));
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
  };
  const reduxFilter = useSelector(state => state.contacts.filter);

  const changeFilter = e => dispatch(cFilter(e.currentTarget.value));

  const visibleContacts = reduxContacts.filter(e =>
    e.name.toLowerCase().includes(reduxFilter.toLowerCase())
  );

  return (
    <Box display="flex">
      <Box ml="auto" mr="auto" textAlign="center">
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={onSubmitForm} />
        <h2>Contacts</h2>
        <Filter changeFilter={changeFilter} />
        {reduxContacts && (
          <ContactList contacts={visibleContacts} deleteCon={deleteContact} />
        )}
      </Box>
    </Box>
  );
}
