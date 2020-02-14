import React from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = e => {
        setDarkMode(!darkmode)
    }
    return [darkMode, toggleDarkMode];
}