import React from 'react';
import { CardQuestion } from './CardQuestion';
import { Link } from 'react-router-dom';

function QuestionList ({ questions, answered}){
    return(
    <div>
        {
            questions.length > 0 ? questions.map(question =>{
                return (
                    <CardQuestion
                        author={question.author}
                        id={question.id}
                        key={question.id}
                        optionOne={question.optionOne.text}
                        answered={answered}
                    />
                )
            })
                :
            <div>
                <h4>No question to be answered </h4>
                <Link to='/add' style={{textDecoration:'underline',display: 'block'}}>Click here to create a new question</Link>
            </div>
        }
    </div>
    )
};

export { QuestionList }