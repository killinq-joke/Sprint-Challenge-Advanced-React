import React, { Component } from "react";
import axios from "axios";
import PlayerList from "./Components/PlayerList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({players: res.data})
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { players } = this.state;

    return (
      <div className="App">
        <PlayerList players={players} />
      </div>
    );
  }
}

export default App;
