import React, { useState } from 'react';
import { CardHeader } from './commons/CardHeader';
import { RadioInput } from './commons/Inputs';

function ShowQuestion ( { question, author, handleSubmit } ){
    const [inputValue, setInputValue] = useState();

    function handleInputChange ({target}){
        setInputValue(target.value)
    }
    return(
        <div className='ask__question'>
            <CardHeader
                text={`${author.name} asks:`}
            />
            <div className='ask__question--card'>
                <div className='ask__question--avatar'>
                    <img src={author.avatarURL} alt="avatar"/>
                </div>
                <div className='ask__question--details'>
                    <h5>'Would you Rather'</h5>
                    <RadioInput onChange={handleInputChange} value={question.optionOne.text} name='rather'/>
                    <RadioInput onChange={handleInputChange} value={question.optionTwo.text} name='rather'/>
                    <button onClick={() => handleSubmit(inputValue)}>Submit</button>
                </div>

            </div>
        </div>
    )
}

export { ShowQuestion }