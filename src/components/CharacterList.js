import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';


class CharacterList extends Component{
    render(){
        return (
            <div>
                
                <ul className='list-group'>
                    <li className="list-group-item headings"><b>Characters List</b></li>
                    {
                        this.props.characters.map((item) => 
                        {
                            return(
                                <li key={item.id} className="list-group-item"><div className="list-item">{item.name}</div>  <div className="list-item right-button" onClick={() => { this.props.addCharacterById(item.id)}}>+</div></li>
                            ) 
                        }  )
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state',state);
    return{
        characters: state.characters
    };

}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ addCharacterById }, dispatch);

// }


export default connect(mapStateToProps, { addCharacterById })(CharacterList);