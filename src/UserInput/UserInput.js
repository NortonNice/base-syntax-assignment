import React from 'react'

const userInput = (props) => {
    const inputStyle={
        border: '2px solid #fffbf9',    
        textAlign: 'center',
        height: '50px',
        width: '25%',
        marginTop:'40px',
        fontSize: '18px',
        backgroundColor: '#c7e2da',
        color: '#E63700'
    };

    return <input 
    type='text' onChange={props.changed}
    value={props.currentName}
    style={inputStyle}    
    />;
};

export default userInput;