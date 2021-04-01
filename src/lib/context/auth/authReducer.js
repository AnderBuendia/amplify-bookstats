import { SET_USER, SET_UI_STATE, SET_IS_LOADING } from '../../../enums/types';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_UI_STATE:
      return {
        ...state,
        uiState: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
