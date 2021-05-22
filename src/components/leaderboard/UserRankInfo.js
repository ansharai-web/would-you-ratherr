import React from 'react';

function UserRankInfo({name, answeredQuestion, createdQuestions}){
    return(
        <div className='user__rank--info'>
            <h5>{name}</h5>
            <div className='user__rank--questions user__rank--answered'>
                <div >Answered questions</div>
                <div>{answeredQuestion}</div>
            </div>
            <div className='user__rank--questions'>
                <div>Created questions</div>
                <div>{createdQuestions}</div>
            </div>
        </div>
    )
}
export { UserRankInfo }