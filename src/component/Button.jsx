import React from 'react';
import classNames from 'classnames'

const Button = ({className}) => {
    return (
        <button 
        className={classNames('button', {className})} 
        onClick={()=>{
            alert(!0);
          }}>
            123
        </button>
    );
};

export default Button;