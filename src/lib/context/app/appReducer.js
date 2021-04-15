import {
  SET_USER,
  SET_UI_STATE,
  SET_IS_LOADING,
  SET_UPDATED_BOOK,
} from 'enums/types';

const ACTIONS_REDUCERS = {
  [SET_USER]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
  [SET_UI_STATE]: (state, action) => ({
    ...state,
    uiState: action.payload,
  }),
  [SET_IS_LOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [SET_UPDATED_BOOK]: (state, action) => ({
    ...state,
    updatedBook: action.payload,
  }),
};

const AppReducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default AppReducer;
