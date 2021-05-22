import './App.css';
import { Header } from './components/commons/Header';
import { Navigation } from './components/navigation/Navigation';
import { Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { PrivateRoute } from './components/commons/PrivateRoute';
import React, { useEffect } from 'react';
import { loginAction } from './actions/auth-user';
import { useDispatch, useSelector } from 'react-redux';
import { authUserSelector } from './selectors/auth-user-selector';
import { _getUsers } from './_DATA';
import { fetchUsersAction } from './actions/users';
import { CreateQuestion } from './components/question/CreateQuestion';
import { LeaderBoard } from './components/leaderboard/LeaderBoard';
import { PollContainer } from './components/poll/PollContainer';
import { SignIn } from './components/signin/SignIn';

function App() {
    const authedUser = useSelector(authUserSelector);
    const authedUserInLocalStorage = window.localStorage.getItem('user');
    const dispatch = useDispatch();

    //component did mount
    useEffect(() => {
        _getUsers()
            .then(users => dispatch(fetchUsersAction(users)))
        //get user
    },[dispatch])
    useEffect(() => {
        if(!authedUser){
            if(authedUserInLocalStorage){
                console.log('here')
                const user = JSON.parse(authedUserInLocalStorage);
                dispatch(loginAction(user));
            }
        }
    },[authedUser,authedUserInLocalStorage, dispatch])
  return (
    <div className="App">
        <Header headerTitle='Would you rather' />

        <Navigation />

        <hr style={{
            borderBottom: '2px solid turquoise',
            marginTop: 1,
            marginBottom: 30
        }}/>
        <div className="center">
            <PrivateRoute path='/leaderboard'>
                <LeaderBoard />
            </PrivateRoute>
            <PrivateRoute path='/add'>
                <CreateQuestion />
            </PrivateRoute>
            <PrivateRoute path='/question/:id'>
                <PollContainer />
            </PrivateRoute>
            <Route component={SignIn} path='/signin'/>
            <PrivateRoute path='/' exact={true}>
                <Home />
            </PrivateRoute>
        </div>

    </div>
  );
}

export default App;
