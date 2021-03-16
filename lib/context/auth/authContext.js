import { createContext } from 'react';

const AuthContext = createContext({
    auth: {
        user: null,
        uiState: null,
        formState: null,
    },
    setAuth: () => {},
});

export default AuthContext;