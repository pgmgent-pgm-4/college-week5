import React, { useRef } from 'react'

const LogButtonClicks = () => {
    const count = useRef(0);

    const handleClick = () => {
        count.current++;
    }

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    )
}

export default LogButtonClicks
