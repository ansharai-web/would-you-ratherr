import { LOG_IN, LOG_OUT } from '../actions/auth-user';

export function authUserReducer (state = null, action) {
    switch (action.type){
        case LOG_IN:
            return action.payload;
        case LOG_OUT:
            return null;
        default:
            return state;
    }
}