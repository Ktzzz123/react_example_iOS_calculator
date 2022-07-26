import React from 'react';
import './Button.css'
import PropType from 'prop-types'
const Button=({content, onButtonClick, type}) => {
   
    return (
        <div className= {`Button ${content === "0" ? "zero" : ""} ${type || ""}`}
        onClick={onButtonClick(content)}>
            {content}
            
        </div>
    );
}


Button.propType = {
    content: PropType.string,
    onButtonClick: PropType.func,
    type: PropType.string
}
export default Button;