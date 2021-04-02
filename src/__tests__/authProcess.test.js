import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Auth as AuthAmp } from '@aws-amplify/auth';
import '../../configureAmplify';
import SignIn from 'components/auth/SignIn';
import SignUp from 'components/auth/SignUp';

AuthAmp.signIn = jest.fn().mockImplementation(() => {
  return true;
});

AuthAmp.signUp = jest.fn().mockImplementation(() => {
  return true;
});

describe('Auth Tests', () => {
  test('Check Sign In', () => {
    render(<SignIn setUiState={jest.fn()} signIn={jest.fn()} />);

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'ibysytho@gmail.com');

    const passwordInput = screen.getByLabelText(/password/i);
    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, 'Ander_1234');

    const buttonSignIn = screen.getByRole('button', {
      name: 'Sign in',
    });
    userEvent.click(buttonSignIn);
  });

  test('Check Sign Up', () => {
    render(<SignUp setUiState={jest.fn()} signUp={jest.fn()} />);

    const usernameInput = screen.getByLabelText(/username/i);
    userEvent.clear(usernameInput);
    userEvent.type(usernameInput, 'UserTest');

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'ibysytho@gmail.com');

    const passwordInput = screen.getByLabelText(/password/i);
    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, 'Ander_1234');

    const buttonSignUp = screen.getByRole('button', {
      name: 'Sign Up',
    });
    userEvent.click(buttonSignUp);
  });
});
