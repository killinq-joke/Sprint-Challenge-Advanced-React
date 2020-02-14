import React, { useState } from 'react';

export const useSwitch = () => {
    const [mode, setMode] = useState(false)
    const toggle = e => {
        setMode(!mode)
    }
    return [mode, toggle];
}