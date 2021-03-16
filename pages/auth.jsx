import { useState, useEffect } from 'react';
import { Auth as AuthAmp } from '@aws-amplify/auth';
import '../configureAmplify';
import AuthLayout from '../components/layouts/AuthLayout';
import { signUp, confirmSignUp, signIn } from '../lib/utils/auth.utils';
import SignUp from '../components/auth/SignUp';
import ConfirmSignUp from '../components/auth/ConfirmSignUp';
import SignIn from '../components/auth/SignIn';

const initialState = { 
    email: '', 
    password: '', 
    authCode: '' 
};

const Auth = () => {
    const [uiState, setUiState] = useState(null);
    const [formState, setFormState] = useState(initialState);
    const [user, setUser] = useState(null);

    const { email, password, authCode } = formState;

    useEffect(() => {
        checkUser();
    }, [])

    async function checkUser() {
        try {
            const user = await AuthAmp.currentAuthenticatedUser();
            setUser(user);
            setUiState('signedIn');
        } catch (err) {
            setUser(null);
            setUiState('signIn');
        }
    }

    const onChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    signUp(setUiState, email, password);

    confirmSignUp(setUiState, email, password, authCode)

    signIn(email, password, setUiState);

    return (
        <AuthLayout>
            {
                uiState === 'signUp' && (
                    <SignUp 
                        onChange={onChange}
                        setUiState={setUiState}
                        signUp={signUp}
                    />
                )
            }
            {
                uiState === 'confirmSignUp' && (
                    <ConfirmSignUp
                        onChange={onChange}
                        setUiState={setUiState}
                        confirmSignUp={confirmSignUp}
                    />
                )
            }
            {
                uiState === 'signIn' && (
                    <SignIn 
                        onChange={onChange}
                        setUiState={setUiState}
                        signIn={signIn}
                    />
                )
            }
        </AuthLayout>
    );
};
 
export default Auth;