import { createSelector } from 'reselect';
import { authUserSelector } from './auth-user-selector';

export const questionsSelector = state => state.questions;

const q = {answeredQuestions: [], unAnsweredQuestions: []}
export const questionsByAnswerSelector = createSelector(
    questionsSelector,
    authUserSelector,
    (questions, user) => questions ?Object
        .keys(questions).reduce( (agg, question) => {
            const questionObj = questions[question];
            const answeredOptionOne = questionObj.optionOne.votes.find( u => u ===user.id)
            const answeredOptionTwo = questionObj.optionTwo.votes.find( u => u ===user.id)
            if(answeredOptionOne || answeredOptionTwo){
                return {...agg, answeredQuestions: [...agg.answeredQuestions, questionObj]}
            }
            return {...agg, unAnsweredQuestions: [...agg.unAnsweredQuestions, questionObj]}

        },q) :q

)
export const pollQuestionSelector = (id) => createSelector(
    questionsSelector,
    (questions) => questions ? questions[id] : undefined
)
