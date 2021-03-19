import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Auth as AuthAmp } from '@aws-amplify/auth';
import '../../configureAmplify';
import SignIn from '../components/auth/SignIn';

AuthAmp.signIn = jest.fn().mockImplementation(() => {
  return true;
});

test('Check Sign Up', () => {
  render(
    <SignIn onChange={jest.fn()} setUiState={jest.fn()} signIn={jest.fn()} />
  );

  const emailInput = screen.getByLabelText(/email/i);
  userEvent.clear(emailInput);
  userEvent.type(emailInput, 'ibysytho@gmail.com');

  const passwordInput = screen.getByLabelText(/password/i);
  userEvent.clear(passwordInput);
  userEvent.type(passwordInput, 'Ander_123');

  const buttonSignIn = screen.getByRole('button', {
    name: 'Sign in',
  });
  userEvent.click(buttonSignIn);
});
