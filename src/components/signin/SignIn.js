import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import '../../styles/signin.css';
import {
    usersOptionsSelector,
    usersSelector,
} from '../../selectors/users-selector';
import { loginAction } from '../../actions/auth-user';
import { Select } from '../commons/Inputs';

const title = 'Welcome to the Would You Rather App!'
const subtitle = 'Please sign in to continue'
function SignIn (){
    const dispatch = useDispatch();
    const options = useSelector(usersOptionsSelector)
    const users = useSelector(usersSelector)
    const [userValue, setUserValue] = useState(undefined);
    const history = useHistory();



    useEffect(() => {
        const user = Object.keys(users).reduce((agg, userName) => {
            return users[userName].id === userValue ? {
                ...agg,
                ...users[userName]} : agg
        }, {});
        if(userValue){
            dispatch(loginAction(user));
            window.localStorage.setItem('user',JSON.stringify(user))
            history.push('/')
        }
    },[userValue, dispatch, history, users])

    function handleSelectUserChange ({ target }){
        setUserValue(target.value)
    }
    return(
        <div className='signin'>
            <div className='signin__header'>
                <h1>{title}</h1>
                <h5>{subtitle}</h5>
            </div>
            <img src={logo} alt="logo"/>
            <Select
                labelClassName='signin__label'
                selectClassName='signin__select'
                name={'signin'}
                options={options}
                id={'signin'}
                labelText='Sign In'
                value={userValue}
                onChange={handleSelectUserChange}
                defaultOptionLabel={'Please select a user'}
            />
        </div>
    )
}

export { SignIn }