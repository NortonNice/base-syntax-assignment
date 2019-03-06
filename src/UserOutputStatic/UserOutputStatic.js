import React from 'react';
import '../UserOutput/UserOutput.css'

const userOutputStatic = (props) => {
    return (
        <div className='UserOutput'>
            <p>Username: { props.userName }</p>
            <p>I can't be overwritten!</p>
        </div>
    )
};

export default userOutputStatic;