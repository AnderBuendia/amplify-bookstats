import { ActionType } from '../action-types';

const initialState = {
  user: null,
  uiState: null,
  loadingForm: false,
  books: [],
  tokenId: null,
  updatedBook: null,
};

const ACTIONS_REDUCERS = {
  [ActionType.GET_BOOKS]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [ActionType.GET_BOOKS_SUCCESS]: (state, action) => ({
    ...state,
    books: action.payload.items,
    tokenId: action.payload.nextToken,
    isLoading: false,
  }),
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
  [ActionType.SET_UPDATED_BOOK]: (state, action) => ({
    ...state,
    updatedBook: action.payload,
  }),
};

const reducer = (state = initialState, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default reducer;
