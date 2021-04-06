import { SET_USER, SET_UI_STATE, SET_IS_LOADING } from 'enums/types';

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
};

const AuthReducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default AuthReducer;
