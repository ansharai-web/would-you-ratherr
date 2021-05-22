import React from 'react';

function UserRankScore({score}){
    return(
        <div className='user__rank--score'>
            <div className='user__rank--scorebox'>
                <div className='user--rank--scoreText'>Score</div>
                <div >
                    <div className='user--rank--scoreBadge'>
                        {score}
                    </div>
                </div>
            </div>

        </div>
    )
}
export { UserRankScore }