import React from 'react';


function UserAvatar({avatarUrl, alt }){
    return(
        <img src={avatarUrl} alt={alt}/>
    )
}
export { UserAvatar }