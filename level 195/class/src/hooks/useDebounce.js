import React from 'react'
import { useState, useEffect } from 'react'

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState()

    useEffect(() => {
        const timeot = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay)

        return () => clearInterval(timeot)
    },[])

    return debouncedValue
}

export default useDebounce