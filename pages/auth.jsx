import { useState, useContext } from 'react';
import '../configureAmplify';
import { useRouter } from 'next/router';
import AuthContext from '../lib/context/auth/authContext';
import AuthLayout from '../components/layouts/AuthLayout';
import SignUp from '../components/auth/SignUp';
import ConfirmSignUp from '../components/auth/ConfirmSignUp';
import SignIn from '../components/auth/SignIn';
import { 
    signUp, 
    confirmSignUp, 
    signIn
} from '../lib/utils/auth.utils';

const initialState = {
    email: '', 
    password: '', 
    authCode: '' 
};

const Auth = () => {
    const { uiState, setUiState } = useContext(AuthContext);
    const [formState, setFormState] = useState(initialState);
    const { email, password, authCode } = formState;
    const router = useRouter();

    const onChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <AuthLayout>
            {
                uiState === 'signUp' && (
                    <SignUp 
                        onChange={onChange}
                        setUiState={setUiState}
                        signUp={() => signUp(email, password, setUiState)}
                    />
                )
            }
            {
                uiState === 'confirmSignUp' && (
                    <ConfirmSignUp
                        onChange={onChange}
                        setUiState={setUiState}
                        confirmSignUp={() => confirmSignUp(
                            email,
                            password,
                            authCode,
                            setUiState,
                            router
                        )}
                    />
                )
            }
            {
                uiState === 'signIn' && (
                    <SignIn 
                        onChange={onChange}
                        setUiState={setUiState}
                        signIn={() => signIn(
                            email, 
                            password, 
                            setUiState,
                            router
                        )}
                    />
                )
            }
        </AuthLayout>
    );
};
 
export default Auth;