import { CREATE_NEW_QUESTION, FETCH_QUESTIONS } from '../actions/questions';
import { LOG_OUT } from '../actions/auth-user';

export function questionsReducer (state =null, {type, payload} ){
    switch (type){
        case FETCH_QUESTIONS:
            return payload;
        case CREATE_NEW_QUESTION:
            return {...state, [payload.id]: payload}
        case LOG_OUT:
            return null
        default:
            return state;
    }
}