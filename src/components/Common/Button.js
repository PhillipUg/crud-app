import React from 'react';
import '../../styles/Common/Button.css';

function Button({ type, text, className, onClick }) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;