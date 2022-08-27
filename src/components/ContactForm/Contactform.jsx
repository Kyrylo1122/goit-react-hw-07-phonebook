import { nanoid } from 'nanoid';
import { validateName, validateTel } from './ValidateForm';
import { Formik, Field, ErrorMessage } from 'formik';
import { FormikForm, ErrorText, ButtonSubmit } from './Contactform.styled';
import { scheme } from 'components/const/Scheme';
const initialValue = {
  name: '',
  number: '',
  id: '',
};
export default function ContactForm({ onSubmitForm }) {
  const nameId = nanoid();
  const telId = nanoid();

  const handleSubmit = (value, { resetForm }) => {
    const id = nanoid();
    value.id = id;
    onSubmitForm(value);
    console.log(value);
    resetForm();
  };

  const FormError = ({ name }) => (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValue}
      validationSchema={scheme}
    >
      <FormikForm>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" validate={validateName} name="name" id={nameId} />
        <FormError name="name" />
        <label htmlFor={telId}>Phone number</label>
        <Field type="tel" validate={validateTel} name="number" id={telId} />
        <FormError name="number" />

        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormikForm>
    </Formik>
  );
}
