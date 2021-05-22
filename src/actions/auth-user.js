export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

function login (user) {
    return {
        type: LOG_IN,
        payload: user
    }
}

function logoutAction(){
    return {
        type: LOG_OUT
    }
}
function loginAction(user) {
    return dispatch => dispatch(login(user))
}

export { loginAction, logoutAction}