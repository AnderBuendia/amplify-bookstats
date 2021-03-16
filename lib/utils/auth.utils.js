import Auth from '@aws-amplify/auth';
import '../../configureAmplify';

export async function signUp(setUiState, email, password) {
    try {
        await Auth.signUp({
            username: email, password, 
            attributes: { email }
        })

        setUiState('confirmSignUp');
    } catch (err) { console.log(err) }
}

export async function confirmSignUp(
    setUiState, 
    email, 
    password, 
    authCode
) {
    try {
        await Auth.confirmSignUp(email, authCode);
        await Auth.signIn(email, password)
        setUiState('signedIn')
    } catch (err) { console.log(err) }
}

export async function signIn(email, password, setUiState) {
    try {
        await Auth.signIn(email, password);
        setUiState('signedIn');
    } catch (err) { console.log(err) }
}