import React from 'react';

function StopButton({handleClick}) {
    return (
        <button onClick={handleClick}>stop</button>
    );
}

export default StopButton;