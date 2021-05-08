import { ActionType } from '../action-types';

const initialState = {
  user: null,
  uiState: null,
  isLoading: false,
};

const ACTIONS_REDUCERS = {
  [ActionType.RESET_APP_STATE]: (state, action) => initialState,
  [ActionType.SET_UI_STATE]: (state, action) => ({
    ...state,
    uiState: action.payload,
  }),
  [ActionType.CHECK_AUTH_USER]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
  [ActionType.CHECK_AUTH_USER_ERROR]: (state, action) => ({
    ...state,
    user: null,
  }),
  [ActionType.SIGN_IN_SUCCESS]: (state, action) => ({
    ...state,
    uiState: action.payload,
    isLoading: false,
  }),
  [ActionType.SIGN_UP_SUCCESS]: (state, action) => ({
    ...state,
    user: { email: action.payload.email },
    uiState: action.payload.uiState,
    isLoading: false,
  }),
  [ActionType.FORGOT_PASSWORD_SUCCESS]: (state, action) => ({
    ...state,
    user: { email: action.payload.email },
    uiState: action.payload.uiState,
  }),
  [ActionType.AUTH_IS_LOADING]: (state, action) => ({
    ...state,
    isLoading: true,
  }),
  [ActionType.AUTH_ERROR]: (state, action) => ({
    ...state,
    isLoading: false,
  }),
};

const reducer = (state = initialState, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default reducer;
