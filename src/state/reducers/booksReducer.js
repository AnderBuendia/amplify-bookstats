import { ActionType } from '../action-types';

const initialState = {
  book: null,
  booksList: [],
  tokenId: null,
};

const ACTIONS_REDUCERS = {
  [ActionType.BOOKS_IS_LOADING]: (state, action) => ({
    ...state,
    isLoading: true,
  }),
  [ActionType.GET_BOOKS_SUCCESS]: (state, action) => ({
    ...state,
    booksList: action.payload.items,
    tokenId: action.payload.nextToken,
    isLoading: false,
    book: null,
  }),
  [ActionType.GET_MORE_BOOKS_SUCCESS]: (state, action) => ({
    ...state,
    booksList: [...state.booksList, ...action.payload.items],
    tokenId: action.payload.nextToken,
    isLoading: false,
  }),
  [ActionType.SET_ADD_BOOK_SUCCESS]: (state, action) => ({
    ...state,
    booksList: [action.payload, ...state.booksList],
    isLoading: false,
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
