export const validateName = value =>
  !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
    ? "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    : '';
export const validateTel = value =>
  !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
    value
  )
    ? 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    : '';
