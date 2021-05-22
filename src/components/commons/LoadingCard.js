import React from 'react';
import '../../styles/loading-card.css';

function LoadingCard(){
    return(
        <div className="card is-loading">
            <div className="image" />
            <div className="content">
            </div>
        </div>
    )
}

export { LoadingCard }