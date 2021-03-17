import { SET_USER, SET_UI_STATE } from '../types';

const AuthReducer = (state, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_UI_STATE:
            return {
                ...state,
                uiState: action.payload
            }
        default:
            return state;
    }
}

export default AuthReducer;