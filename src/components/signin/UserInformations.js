import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authUserSelector } from '../../selectors/auth-user-selector';
import { logoutAction } from '../../actions/auth-user';

function UserInformations ({isSignIn, handleNavigationClick}){
    const user = useSelector(authUserSelector);
    const dispatch = useDispatch();

    function handleLogOut () {
        dispatch(logoutAction());
        window.localStorage.setItem('user','')
    }
    return(
        <>
            {user ?
                <>
                    <div>Hello, {user.name}</div>
                    <Link onClick={handleLogOut} to='/'>Logout</Link>
                </>:
                <Link
                    onClick={handleNavigationClick}
                    to='/signin' className={isSignIn ? 'trapezoid' : ''}>Sign In</Link>
            }
        </>
    )
}


export { UserInformations }