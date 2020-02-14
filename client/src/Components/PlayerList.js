import React, { Component } from 'react';
import PlayerCard from './PlayerCard';

export default class PlayerList extends Component {
    
    render() {
        const { players } = this.props;
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