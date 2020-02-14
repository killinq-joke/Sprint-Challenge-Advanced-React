import React, { useState, useEffect } from 'react';
import axios from 'axios'

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
  };

export const useSwitch = (key, initialValue) => {
    const [mode, setMode] = useLocalStorage('Switch', false)
    const toggle = e => {
        setMode(!mode)
    }
    return [mode, toggle];
}

// export const useWomenCup = () => {
//     const data =  [];
//     useEffect(() => {
//         axios
//         .get("http://localhost:5000/api/players")
//         .then(res => {
//         //console.log(res.data);
//         data = res.data
//         })
//         .catch(err => {
//         console.log(err);
//         });
//     }, [])
//     return [data];
// }