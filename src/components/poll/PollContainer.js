import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Poll } from './Poll';
import { questionsSelector } from '../../selectors/questions-selector';
import { fetchQuestionsAction } from '../../actions/questions';
import { _getQuestions } from '../../_DATA';
import { LoadingCard } from '../commons/LoadingCard';

function PollContainer(){
    const questions = useSelector(questionsSelector);
    const dispatch = useDispatch();
    useEffect(() =>{
        if(!questions){
            _getQuestions().then(questions => {
                dispatch(fetchQuestionsAction(questions));
            })
        }

    },[questions, dispatch])
    return(
        <>
            {questions ? <Poll /> : <LoadingCard />}
        </>

    )
}

export { PollContainer }