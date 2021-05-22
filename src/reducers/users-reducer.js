import { FETCH_USERS } from '../actions/users';

export function usersReducer(state={}, action){
    switch (action.type){
        case FETCH_USERS:
            return action.payload
        default:
            return state
    }
}