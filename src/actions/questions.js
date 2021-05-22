export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const CREATE_NEW_QUESTION = 'CREATE_NEW_QUESTION';

function fetchQuestions(questions){
    return {
        type: FETCH_QUESTIONS,
        payload: questions
    }
}

export function fetchQuestionsAction(questions){
    return dispatch => dispatch(fetchQuestions(questions));
}

function createNewQuestion(question){
    return {
        type:CREATE_NEW_QUESTION,
        payload: question
    }
}
export function createNewQuestionAction(questions){
    return dispatch => dispatch(createNewQuestion(questions));
}