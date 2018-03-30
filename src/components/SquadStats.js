import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {

    strength(){
        let strength = 0;
        this.props.heros.forEach(hero => strength += hero.strength)
        return strength;
    }

    intelligence(){
        let intelligence = 0;
        this.props.heros.forEach(hero => intelligence += hero.intelligence)
        return intelligence;
    }
    speed(){
        let speed = 0;
        this.props.heros.forEach(hero => speed += hero.speed)
        return speed;
    }

    render(){
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item headings"> Squad Stats</li>
                    <li className="list-group-item">
                        <b>Overall Strength</b> { this.strength() }
                    </li>
                    <li className="list-group-item">
                        <b>Overall Intelligence</b> {this.intelligence()}
                    </li>
                    <li className="list-group-item">
                        <b>Overall Speed</b> {this.speed()}
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        heros: state.heros
    }
}

export default connect(mapStateToProps, null) (SquadStats);

