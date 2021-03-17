// @ts-nocheck
import { useReducer, createContext } from 'react';
import AuthReducer from './authReducer';
import { SET_USER, SET_UI_STATE } from '../types';

const AuthContext = createContext(null);

const initialState = {
    user: null,
    uiState: null,
};

export const AuthState = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const setUser = (user) => {
        console.log(user)
        dispatch({
            type: SET_USER,
            payload: user
        })
    }

    const setUiState = (uiState) => {
        console.log(uiState)
        dispatch({
            type: SET_UI_STATE,
            payload: uiState,
        })
    }

    return (
        <AuthContext.Provider value={{
            user: state.user,
            uiState: state.uiState,
            setUser,
            setUiState
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;