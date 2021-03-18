import Auth from '@aws-amplify/auth';
import Router from 'next/dist/next-server/lib/router/router';
import '../../configureAmplify';
import { MainPaths } from '../../enums/paths/main-paths';

/* Check user */
export async function checkUser(setUser, setUiState) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
    setUiState('signedIn');
  } catch (err) {
    setUser(null);
    setUiState('signIn');
  }
}

/* Sign Up */
export async function signUp(email, password, setUiState) {
  try {
    await Auth.signUp({
      username: email,
      password,
      attributes: { email },
    });

    setUiState('confirmSignUp');
  } catch (err) {
    console.log(err);
  }
}

/* Confirm Sign Up */
export async function confirmSignUp(
  email,
  password,
  authCode,
  setUiState,
  router
) {
  try {
    await Auth.confirmSignUp(email, authCode);
    await Auth.signIn(email, password);
    setUiState('signedIn');
    await router.push(MainPaths.INDEX);
  } catch (err) {
    console.log(err);
  }
}

/* Sign In */
export async function signIn(email, password, setUiState, router) {
  try {
    await Auth.signIn(email, password);
    setUiState('signedIn');
    await router.push(MainPaths.INDEX);
  } catch (err) {
    console.log(err);
  }
}

/* Sign Out */
export function signOut(setUiState, setUser) {
  Auth.signOut();
  setUiState('signIn');
  setUser('null');
}
