// @ts-nocheck
import { useReducer, createContext } from 'react';
import AuthReducer from './authReducer';
import { SET_USER, SET_UI_STATE, SET_IS_LOADING } from 'enums/types';

const AuthContext = createContext(null);

export const AuthState = ({ children }) => {
  const initialState = {
    user: null,
    uiState: null,
    loadingForm: false,
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

  const setIsLoading = (isLoading) => {
    dispatch({
      type: SET_IS_LOADING,
      payload: isLoading,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        uiState: state.uiState,
        isLoading: state.isLoading,
        setUser,
        setUiState,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
