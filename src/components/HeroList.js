import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

class HeroList extends Component {
    render(){
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item headings"><b>Your Hero Squard</b></li>
                {
                    this.props.heros.map(hero => {
                        return(
                            <li key={hero.id} className="list-group-item">
                                <div className="list-item">
                                {hero.name}
                                </div>
                                <div className="list-item right-button"
                                onClick={() => this.props.removeCharacterById(hero.id)}
                                >
                                x</div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        heros: state.heros
    }
}

export default connect(mapStateToProps, { removeCharacterById})(HeroList);