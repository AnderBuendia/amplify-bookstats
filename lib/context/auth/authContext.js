import { createContext, useContext } from 'react';

const AuthContext = createContext({
    authState: {
        user: null,
        uiState: null,
    },
    setAuth: () => {}
});

// export const useAuthContext = () => {
//     const context = useContext(AuthContext);

//     if (!context) {
//         throw new Error(
//             'useAuthContext must be used within AuthContextProvider'
//         );
//     }

//     return context;
// }

// export const AuthContextProvider = props => {
//     const [authState, setAuth] => 
// }

export default AuthContext;