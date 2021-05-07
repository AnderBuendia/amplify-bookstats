import { ActionType } from '../action-types';

const initialState = {
  book: null,
  booksList: [],
  tokenId: null,
};

const ACTIONS_REDUCERS = {
  [ActionType.GET_BOOKS]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [ActionType.GET_BOOKS_SUCCESS]: (state, action) => ({
    ...state,
    booksList: action.payload.items,
    tokenId: action.payload.nextToken,
    isLoading: false,
    book: null,
  }),
  [ActionType.SET_ADD_BOOK]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [ActionType.SET_ADD_BOOK_SUCCESS]: (state, action) => ({
    ...state,
    booksList: [action.payload, ...state.booksList],
    isLoading: false,
  }),
  [ActionType.SET_EDIT_BOOK]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [ActionType.SET_EDIT_BOOK_SUCCESS]: (state, action) => ({
    ...state,
    book: action.payload,
    isLoading: false,
  }),
};

const reducer = (state = initialState, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default reducer;
