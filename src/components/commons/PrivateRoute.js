import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authUserSelector } from '../../selectors/auth-user-selector';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    const user = useSelector(authUserSelector);
    const localStorageUser = window.localStorage.getItem('user');
    function checkForUser(){
        if(user){
            return true
        }
        if(localStorageUser){
            return  true
        }

        return false
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                checkForUser() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export { PrivateRoute }