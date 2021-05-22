import React from 'react';
import '../../styles/header.css';

function Header({headerTitle}){
    return(
        <header className='header'>
            <h1>{headerTitle}</h1>
        </header>

    )
}

export { Header }