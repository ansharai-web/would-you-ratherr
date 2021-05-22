import React from 'react';

function PollResult ({ question, totalVotes, votes, className}){
    function calcPercentage(){
        if(votes === 0){
            return `${0}%`
        }
        return `${(votes / totalVotes) * 100}%`
    }
    return(
        <div className={className}>
            <p>{question}</p>
            <div className='poll__result__percentage'>
                <div style={{
                    width: calcPercentage(),
                    background:'turquoise',
                    height:'100%',
                    borderRadius:10
                }}/>
            </div>
            <span>{`${votes} of ${totalVotes} votes`}</span>
        </div>

    )
}

export { PollResult }