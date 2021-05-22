import { combineReducers } from 'redux';
import { usersReducer } from './users-reducer';
import { questionsReducer } from './questions-reducer';
import { authUserReducer } from './auth-user-reducer';


export const rootReducer = combineReducers({
    authUser:authUserReducer,
    users: usersReducer,
    questions: questionsReducer
});