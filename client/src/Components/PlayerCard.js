import React, { Component } from 'react';


export default class PlayerCard extends Component {
   

    render() {
        const { name, country } = this.props
        return(
            <div>
                {name}, {country}
            </div>
        )
    }
}