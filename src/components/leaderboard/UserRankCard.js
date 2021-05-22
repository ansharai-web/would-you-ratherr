import React from 'react';
import { UserRankScore } from './UserRankScore';
import { UserRankInfo } from './UserRankInfo';
import { UserAvatar } from '../commons/UserAvatar';

function UserRankCard({ user,index }){
    return(
        <div className='user__rank'>
            <div className='user__rank--avatar'>
                <div className='user__rank--triangle'/>
                <div className='user__rank--place'>{index + 1}</div>
                <UserAvatar
                    alt={`avatar-${user.name}`}
                    avatarUrl={user.avatar}
                />
            </div>
            <UserRankInfo
                name={user.name}
                answeredQuestion={user.answered}
                createdQuestions={user.created}
            />
            <UserRankScore score={user.score}
            />
        </div>
    )
}
export { UserRankCard }