// @ts-nocheck
import { useReducer, createContext } from 'react';
import AppReducer from './appReducer';
import {
  SET_USER,
  SET_UI_STATE,
  SET_IS_LOADING,
  SET_UPDATED_BOOK,
} from 'enums/types';

const AppContext = createContext(null);

export const AppState = ({ children }) => {
  const initialState = {
    user: null,
    uiState: null,
    loadingForm: false,
    updatedBook: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        uiState: state.uiState,
        isLoading: state.isLoading,
        updatedBook: state.updatedBook,
        setUser: (user) => dispatch({ type: SET_USER, payload: user }),
        setUiState: (uiState) =>
          dispatch({ type: SET_UI_STATE, payload: uiState }),
        setIsLoading: (isLoading) =>
          dispatch({ type: SET_IS_LOADING, payload: isLoading }),
        setUpdatedBook: (updatedBook) =>
          dispatch({ type: SET_UPDATED_BOOK, payload: updatedBook }),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
