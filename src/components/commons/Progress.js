import React from 'react';
import Circular from '../../refresh.svg';

function Progress({loading,...rest}){
    return(
        <>
            {loading && <img src={Circular} alt='loading' {...rest} className='loading'/>}
        </>)
}


export { Progress }