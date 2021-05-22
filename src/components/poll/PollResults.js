import React from 'react';
import { PollResult } from './PollResult';
import { CardHeader } from '../commons/CardHeader';
import { UserAvatar } from '../commons/UserAvatar';


function PollResults ({author,totalVotes, question, chosenAnswer}){

    return(
        <div className='poll__result__card'>
            <CardHeader text={`Asked by ${author.name}`} className='poll___result--header'/>
            <div className='poll__result'>
                <div className='poll___result--avatar'>
                    <UserAvatar alt="avatar" avatarUrl={author.avatarURL} />
                </div>
                <div className='poll___result--body'>
                    <h5>Results</h5>
                    <PollResult
                        className={chosenAnswer === 1 ? 'poll__result--chosen' :'poll___result--poll'}
                        question={question.optionOne.text}
                        votes={question.optionOne.votes.length}
                        totalVotes={totalVotes}/>
                    <PollResult
                        className={chosenAnswer === 2 ? 'poll__result--chosen' :'poll___result--poll'}
                        question={question.optionTwo.text}
                        votes={question.optionTwo.votes.length}
                        totalVotes={totalVotes}/>
                </div>

            </div>
        </div>

    )
}

export { PollResults }