import React,{ useState, useEffect }  from "react";
import * as rtl from '@testing-library/react';
import axios from "axios";
import { useSwitch } from "./CustomHooks";
import PlayerList from "./Components/PlayerList";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [darkMode, toggleDarkMode] = useSwitch();
  //constructor() {
  //   super();
  //   this.state = {
  //     players: []
  //   }
  // }
    
  

  useEffect(() => {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      setPlayers(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })
  //componentDidMount() {

  //}
    

  
    
    

    return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <button onClick={toggleDarkMode}>{darkMode ? 'Light' : 'Dark'} Mode</button>
        <PlayerList players={players} />
      </div>
    );
  
}

export default App;
