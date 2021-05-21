import React, {useCallback, useState} from 'react'

import BigList from '../list/BigList';

const Button = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount(count => count + 1)
    }, [])

    console.log('Button Rendered')

    return (
        <>
            <button onClick={handleClick}>
                Click me to update count
            </button>

            <p>{count}</p>

            <BigList message={count} handleOnClick={handleClick} />
        </>
    )
}

export default Button
