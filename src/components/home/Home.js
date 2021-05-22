import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _getQuestions } from '../../_DATA';
import { fetchQuestionsAction } from '../../actions/questions';
import '../../styles/home.css';
import { questionsByAnswerSelector } from '../../selectors/questions-selector';
import { LoadingCard } from '../commons/LoadingCard';
import { QuestionList } from '../question/QuestionList';
import { fakeUsers } from '../leaderboard/LeaderBoard';

const ANSWERED = 'Answered Questions';
const UNANSWERED = 'Unanswered Questions';

function Home (){
    const dispatch = useDispatch();
    const [questionType, setQuestionType] = useState(UNANSWERED);
    const questionsByAnswer = useSelector(questionsByAnswerSelector);
    const { answeredQuestions,unAnsweredQuestions } = questionsByAnswer;
    const [loading, setLoading] = useState(false)


    const displayAnswered = questionType === ANSWERED;
    const displayUnAnswered = questionType === UNANSWERED;
    useEffect(() => {
        setLoading(true);
        _getQuestions().then(questions => {
            dispatch(fetchQuestionsAction(questions));
            setLoading(false)
        })
    },[dispatch])
    function handleQuestionTypeClick({ target }){
        setQuestionType(target.textContent);
    }
    return(

        <div className='questions'>
            <div className='questions__header'>
                <div style={{ cursor: 'pointer' }} onClick={handleQuestionTypeClick} className={displayUnAnswered ? 'active' : 'center'}>{UNANSWERED}</div>
                <div style={{ cursor: 'pointer' }} onClick={handleQuestionTypeClick} className={displayAnswered ? 'active' : 'center'}>{ANSWERED}</div>
            </div>
            {loading ?
            fakeUsers.map(u =>
                <LoadingCard key={u}/>) :
            <>
                {displayAnswered && <QuestionList questions={answeredQuestions} />}
                {displayUnAnswered &&  <QuestionList questions={unAnsweredQuestions}/>}
            </>
            }

        </div>
    )
}

export { Home }