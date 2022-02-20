import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Notify } from 'notiflix';

const AuthForm = ({ onSubmit, isLogIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (!isLogIn && !name) {
      Notify.failure('Enter your name, please!');
      return;
    }

    if (!email) {
      Notify.failure('Enter your email, please!');
      return;
    }
    if (!password) {
      Notify.failure('Enter your password, please!');
      return;
    }

    if (password.length < 7) {
      Notify.failure(`Password should contain more then 7 symbols!`);
      return;
    }

    if (password.includes('password')) {
      Notify.failure(`Password shouldn't contain word "password"!`);
      return;
    }

    isLogIn
      ? onSubmit({ email, password })
      : onSubmit({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        {!isLogIn && (
          <Form.Group className="mb-3" controlId="name">
            <Form.Label column="lg">Name:</Form.Label>
            <Form.Control
              size="lg"
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={onChange}
              value={name}
            />
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="email">
          <Form.Label column="lg">Email:</Form.Label>
          <Form.Control
            size="lg"
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={onChange}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label column="lg">Password</Form.Label>
          <Form.Control
            size="lg"
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AuthForm;
