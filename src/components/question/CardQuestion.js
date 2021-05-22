import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authorUserSelector } from '../../selectors/users-selector';
import { CardHeader } from '../commons/CardHeader';


function CardQuestion ({ author:user, id,optionOne, answered = false }){
    const author  = useSelector(authorUserSelector(user))
    return(
        <div className='question__card'>
            <CardHeader text={`${author?.name} asks:`} />
            <div className='question__card--info'>
                <div className='question__card--avatar'>
                    <img src={author?.avatarURL} alt={author?.avatarURL}/>
                </div>
                <div className='question__card--rather'>
                    <span style={{fontWeight: 'bold'}}>Would you rather</span>

                    <p>{optionOne}</p>
                    <Link to={{
                        pathname:`/question/${id}`
                    }}><button>View Poll</button></Link>
                </div>
            </div>
        </div>
    )
}

export { CardQuestion }