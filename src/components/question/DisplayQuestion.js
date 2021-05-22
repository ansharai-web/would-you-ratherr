import React, { useState } from 'react';
import { CardHeader } from '../commons/CardHeader';
import { UserAvatar } from '../commons/UserAvatar';
import { RadioInput } from '../commons/Inputs';


function DisplayQuestion ( { question, author, handleSubmit } ){
    const [inputValue, setInputValue] = useState();

    function handleInputChange ({target}){
        setInputValue(target.value)
    }
    return(
        <div className='ask__question'>
            <CardHeader
                text={`${author.name} asks: `}
                className='ask__question__header'
            />
            <div className='ask__question--card'>
                <div className='ask__question--avatar'>
                    <UserAvatar avatarUrl={author.avatarURL} alt='avatar'/>
                </div>
                <div className='ask__question--details'>
                    <h5>Would you Rather</h5>
                    <div style={{ marginTop:10}}>
                        <RadioInput className={'reset__input'} onChange={handleInputChange} value={question.optionOne.text} name='rather'/>
                    </div>
                    <div style={{ marginTop:10}}>
                        <RadioInput className={'reset__input'} onChange={handleInputChange} value={question.optionTwo.text} name='rather'/>

                    </div>
                    <button onClick={() => handleSubmit(inputValue)} style={{marginTop: 20}}>Submit</button>
                </div>

            </div>
        </div>
    )
}

export { DisplayQuestion }