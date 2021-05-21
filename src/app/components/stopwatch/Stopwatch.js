import React, {useRef, useState} from 'react'

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const timer = useRef(null);

    const handleStart = () => {
        if (timer.current) return;
        timer.current = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timer.current);
    }

    const handleReset = () => {
        clearInterval(timer.current);
        setSeconds(0);
    }

    return (
        <div>
            Timer: {seconds}

            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch
