export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers(users){
    return{
        type: FETCH_USERS,
        payload: users
    }
}

export function fetchUsersAction(users){
    return (dispatch) => dispatch(fetchUsers(users))
}
