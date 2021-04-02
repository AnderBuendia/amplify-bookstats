import Auth from '@aws-amplify/auth';
import '../../../configureAmplify';
import { MainPaths } from '../../enums/paths/main-paths';
import toast from 'react-hot-toast';

/* Check user */
export async function checkAuthUser(setUser, router) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  } catch (error) {
    setUser(null);
    router.push(MainPaths.AUTH);
  }
}

/* Sign Up */
export async function signUp(values, setIsLoading, setUiState, setUser) {
  const { email, password } = values;
  try {
    setIsLoading(true);
    await Auth.signUp({
      username: email,
      password,
      attributes: { email },
    });

    setUiState('confirmSignUp');
    setUser(email);
    setIsLoading(false);
  } catch (err) {
    toast.error(err.message);
    setIsLoading(false);
  }
}

/* Confirm Sign Up */
export async function confirmSignUp(values, user, setUiState, setIsLoading) {
  try {
    setIsLoading(true);
    await Auth.confirmSignUp(user, values.authCode);
    setUiState(null);
    setIsLoading(false);
  } catch (err) {
    toast.error(err.message);
    setIsLoading(false);
  }
}

/* Sign In */
export async function signIn(values, setUiState, setIsLoading, router) {
  const { email, password } = values;
  try {
    setIsLoading(true);
    await Auth.signIn(email, password);

    setUiState('signedIn');
    setIsLoading(false);
    await router.push(MainPaths.BOOKS);
  } catch (err) {
    toast.error(err.message);
    setIsLoading(false);
  }
}

/* Sign Out */
export async function signOut(setUiState, setUser, router) {
  await Auth.signOut();
  setUiState(null);
  setUser(null);
  await router.push(MainPaths.INDEX);
}

/* Forgot Password */
export async function forgotPassword(email, setUiState) {
  try {
    await Auth.forgotPassword(email);
    setUiState('forgotPasswordSubmit');
  } catch (err) {
    console.log(err);
  }
}

/* Forgot Password Submit */
export async function forgotPasswordSubmit(
  email,
  authCode,
  password,
  setUiState,
  router
) {
  console.log('pass', password);
  try {
    await Auth.forgotPasswordSubmit(email, authCode, password);
    setUiState(null);
    await router.push(MainPaths.INDEX);
  } catch (err) {
    console.log(err);
  }
}
