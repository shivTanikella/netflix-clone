// src/pages/Signup.js (or wherever it lives)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderContainer from '../containers/header.js';
import { FooterContainer } from '../containers/footer.js';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { auth } from '../lib/firebase.prod.js';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const cred = await createUserWithEmailAndPassword(auth, emailAddress, password);
      await updateProfile(cred.user, { displayName: firstName, photoURL:(Math.floor(Math.random() * 5)+1) });
      navigate(ROUTES.BROWSE);
    } catch (err) {
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      setError(err.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin"> Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
