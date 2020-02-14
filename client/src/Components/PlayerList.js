import React, { Component } from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

export default class PlayerList extends Component {
    constructor() {
        super()
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/players')
        .then(res => {
        this.setState({players: res.data})
        })
        .catch(err => {
        console.log(err)
        })
    }


    render() {
        const { players } = this.state;
        //console.log(players);
        return(
            <div>
                { players.map(player => {
                    // console.log(player)
                    return(
                        <PlayerCard key={player.id} name={player.name} country={player.country}/>
                    )
                }) }
            </div>
        )
    }
        
    
}