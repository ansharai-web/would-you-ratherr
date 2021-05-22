import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PollResults } from './PollResults';
import '../../styles/poll.css';
import { useParams } from 'react-router-dom';
import { pollQuestionSelector } from '../../selectors/questions-selector';
import { authorUserSelector } from '../../selectors/users-selector';
import { authUserSelector } from '../../selectors/auth-user-selector';
import { _saveQuestionAnswer } from '../../_DATA';
import { DisplayQuestion } from '../question/DisplayQuestion';
import { LoadingCard } from '../commons/LoadingCard';

function Poll (){
    const {id} = useParams();
    const pollQuestion = useSelector(pollQuestionSelector(id));
    const author = useSelector(authorUserSelector(pollQuestion.author));
    const authedUser = useSelector(authUserSelector);
    const answered = authedUser ? !!authedUser.answers[id] : false;
    const [pollAnswer, setPollAnswer] = useState(authedUser.answers[id]  || undefined);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(answered)

    const totalVotes = pollQuestion.optionTwo.votes.length + pollQuestion.optionOne.votes.length;
    const optionAnswered = pollAnswer === 'optionOne' ? 1 : 2;


    useEffect(() =>{
        if(pollAnswer){
            _saveQuestionAnswer({
                authedUser:authedUser.id, qid:pollQuestion.id, answer:pollAnswer})
        }
    },[pollAnswer, authedUser?.id, pollQuestion?.id])

    function handleSubmit(option){
        setPollAnswer(option === pollQuestion.optionOne.text ?'optionOne': 'optionTwo');
        setIsQuestionAnswered(true);
    }

    return(
        <>
            {author ?
                <>
                    {isQuestionAnswered ?
                        <PollResults
                            question={pollQuestion}
                            author={author}
                            totalVotes={totalVotes}
                            chosenAnswer={optionAnswered}
                        />
                        :
                        <DisplayQuestion
                            question={pollQuestion}
                            author={author}
                            handleSubmit={handleSubmit}
                        />
                    }
                </>: <LoadingCard/>
            }

        </>

    )
}

export { Poll }