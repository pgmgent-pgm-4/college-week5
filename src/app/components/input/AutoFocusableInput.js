import React, {useEffect, useRef} from 'react'

const AutoFocusableInput = () => {
    const input = useRef();

    useEffect(() => {
        input.current.focus();
    }, [])

    console.log('Auto focus rendered')

    return (
        <input ref={input} type="text" />
    )
}

export default AutoFocusableInput
