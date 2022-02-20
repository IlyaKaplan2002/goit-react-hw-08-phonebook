import React, { useState } from 'react';
import ContactFormStyled from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { Button, Form } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(contactsOperations.addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <ContactFormStyled>
      <Form name="contact" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label column="lg">Name</Form.Label>
          <Form.Control
            size="lg"
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="number">
          <Form.Label column="lg">Number</Form.Label>
          <Form.Control
            size="lg"
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Form.Group>

        <Button type="submit">Add contact</Button>
      </Form>
    </ContactFormStyled>
  );
};

export default ContactForm;
