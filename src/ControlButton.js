import React from 'react';

function ControlButton({label, handleClick}) {
    return (
        <button onClick={handleClick}>{label}</button>
    );
}

export default ControlButton;