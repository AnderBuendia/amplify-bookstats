import { ActionType } from '../action-types';

const initialState = {
  user: null,
  uiState: null,
  isLoading: false,
};

const ACTIONS_REDUCERS = {
  [ActionType.SET_USER]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
  [ActionType.SET_UI_STATE]: (state, action) => ({
    ...state,
    uiState: action.payload,
  }),
  [ActionType.SET_IS_LOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
};

const reducer = (state = initialState, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default reducer;
