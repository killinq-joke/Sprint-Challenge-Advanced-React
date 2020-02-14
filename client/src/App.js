import React,{ useState, useEffect }  from "react";
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
    
  

  
  //componentDidMount() {

  //}
  useEffect(() => {
    axios
    .get("http://localhost:5000/api/players")
    .then(res => {
      //console.log(res.data);
      setPlayers(res.data)
    })
    .catch(err => {
      console.log(err);
    });

  }, [])
    

  
    
    

    return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <button onClick={toggleDarkMode}>{darkMode ? 'Light' : 'Dark'} Mode</button>
        <PlayerList players={players} />
      </div>
    );
  
}

export default App;
