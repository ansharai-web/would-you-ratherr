import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/create-question.css';
import { createNewQuestionAction } from '../../actions/questions';
import { authUserSelector } from '../../selectors/auth-user-selector';
import { InputText } from '../commons/Inputs';
import { _saveQuestion } from '../../_DATA';
import { Progress } from '../commons/Progress';

const title = 'Create New Question';
const subtitle = 'Would you rather ...';
const option1 = 'Enter Option One Text Here'
const option2 = 'Enter Option Two Text Here'
const defaultOptionState = {
    optionOneText: '',
    optionTwoText: ''
};
function CreateQuestion (){
    const user = useSelector(authUserSelector);
    const [choises, setChoises] = useState(defaultOptionState);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(defaultOptionState);
    const dispatch = useDispatch();

    function handleInputChange ({ target }) {
        setChoises((prev) => {
            return {...prev, [target.name] : target.value}
        })
    };
    function handleSubmit () {
        if(!choises.optionOneText){
            setError((prev) =>({ ...prev, optionOneText: 'Please fill the' +
                    ' first option'}))
        }
        if(!choises.optionTwoText){
            setError((prev) =>({ ...prev, optionTwoText: 'Please fill the' +
                    ' second option'}))
        }
        if(choises.optionTwoText && choises.optionOneText){
            setIsPending(true)
            _saveQuestion({author: user.id,...choises })
                .then(res => {
                    dispatch(createNewQuestionAction(res));
                    setIsPending(false);
                    setChoises(defaultOptionState)
                });
            setError(defaultOptionState)
        }
    };

    return(
        <div className='new__question'>
            <h1>{title}</h1>
            <p style={{ marginLeft: '30px', marginBottom: 0}}>Complete the question:</p>
            <h5>{subtitle}</h5>
            <InputText
                value={choises.optionOneText}
                name={'optionOneText'}
                onChange={handleInputChange}
                placeholder={option1}
                error={error?.optionOneText}
            />
            <p className='new__question--or'>OR</p>
            <InputText
                value={choises.optionTwoText}
                name={'optionTwoText'}
                onChange={handleInputChange}
                placeholder={option2}
                error={error?.optionTwoText}
            />
            <button onClick={handleSubmit} style={{position:'relative'}}>Submit <Progress width={24} height={24} style={{position: 'absolute', right: 10,top: 2}} loading={isPending}/></button>
        </div>
    )
};

export { CreateQuestion }