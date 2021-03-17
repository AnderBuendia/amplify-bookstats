import { useState, useEffect } from 'react';
import { Auth as AuthAmp } from '@aws-amplify/auth';
import '../configureAmplify';
import AuthLayout from '../components/layouts/AuthLayout';
import SignUp from '../components/auth/SignUp';
import ConfirmSignUp from '../components/auth/ConfirmSignUp';
import SignIn from '../components/auth/SignIn';

const initialState = {
    email: '', 
    password: '', 
    authCode: '' 
};

const Auth = () => {
    const [formState, setFormState] = useState(initialState);
    const [uiState, setUiState] = useState(null);
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

    async function signUp() {
        try {
            await AuthAmp.signUp({
                username: email, password, 
                attributes: { email }
            })
    
            setUiState('confirmSignUp');
        } catch (err) { console.log(err) }
    }
    
     async function confirmSignUp() {
        try {
            await AuthAmp.confirmSignUp(email, authCode);
            await AuthAmp.signIn(email, password)
            setUiState('signedIn')
        } catch (err) { console.log(err) }
    }
    
    async function signIn() {
        try {
            await AuthAmp.signIn(email, password);
            setUiState('signedIn');
        } catch (err) { console.log(err) }
    }

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
            {
                (uiState === 'signedIn' && user) && (
                    <div>
                        <p className="text-xl">
                            Welcome, {user.attributes.email}
                        </p>
                        <button
                            className="text-white w-full mt-10 bg-pink-600 p-3 rounded"
                            onClick={() => {
                                AuthAmp.signOut();
                                setUiState('signIn');
                                setUser(null);
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                )
            }
        </AuthLayout>
    );
};
 
export default Auth;