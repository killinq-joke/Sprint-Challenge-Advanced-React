import React  from "react";
import * as rtl from '@testing-library/react';
import axios from "axios";
import { useSwitch } from "./CustomHooks";
import PlayerList from "./Components/PlayerList";
import "./App.css";

function App() {
  // const [players, setPlayers] = useState([]);
  const [darkMode, toggleDarkMode] = useSwitch();
  //constructor() {
  //   super();
  //   this.state = {
  //     players: []
  //   }
  // }
    
  

  
  //componentDidMount() {

  //}
    

  
    
    

    return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <button onClick={toggleDarkMode}>{darkMode ? 'Light' : 'Dark'} Mode</button>
        <PlayerList />
      </div>
    );
  
}

export default App;
