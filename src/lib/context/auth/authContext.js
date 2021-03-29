// @ts-nocheck
import { useReducer, createContext } from 'react';
import AuthReducer from './authReducer';
import { SET_USER, SET_UI_STATE } from '../../../enums/types';

const AuthContext = createContext(null);

export const AuthState = ({ children }) => {
  const initialState = {
    user: null,
    uiState: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setUser = (user) => {
    dispatch({
      type: SET_USER,
      payload: user,
    });
  };

  const setUiState = (uiState) => {
    dispatch({
      type: SET_UI_STATE,
      payload: uiState,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        uiState: state.uiState,
        setUser,
        setUiState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
