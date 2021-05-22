import React from 'react';

function CardHeader ({ text, className }){
    return(
        <div className={className}>
            {text}
        </div>
    )
}

export { CardHeader }