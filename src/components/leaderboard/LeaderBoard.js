import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserRankCard } from './UserRankCard';
import '../../styles/leaderboard.css';
import { userLeaderBoardSelector } from '../../selectors/users-selector';
import { _getUsers } from '../../_DATA';
import { fetchUsersAction } from '../../actions/users';
import { LoadingCard } from '../commons/LoadingCard';

export const fakeUsers =[1, 2, 3]

function LeaderBoard(){
    const userLeaderBoard = useSelector(userLeaderBoardSelector);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
   //component did mount
    useEffect(() => {
        setLoading(true);
        _getUsers()
            .then(users => {
                dispatch(fetchUsersAction(users));
                setLoading(false)
            })
        //get user
    },[dispatch])
    return (
        <>
            {loading && fakeUsers.map(u => <LoadingCard key={u}/>)}
            {userLeaderBoard.length > 0 && !loading && userLeaderBoard.map((user, index) => <UserRankCard user={user} index={index} key={index} />)}
        </>
    )
}

export { LeaderBoard }