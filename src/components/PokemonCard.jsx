import React from 'react';
import {getData} from '../actions';
import {connect} from 'react-redux';
import { PokemonCard, PokemonCardContent, PokemonImageWrapper, PokemonName} from '../styles';


class Pokemon extends React.Component{

  handleButtonClick(id) {
    this.props.getData(id);
  }

  render(){
    const {pokemon,id} = this.props;
    return (
            <PokemonCard onClick={() => this.handleButtonClick(id)}>
                <PokemonCardContent>
                  <PokemonImageWrapper>
                      <img src={`/img/${id}.png`} />
                  </PokemonImageWrapper>
                  <PokemonName>
                      {pokemon.name}
                  </PokemonName>
                </PokemonCardContent>
            </PokemonCard>
    )
    }
}

export default connect(null, {getData})(Pokemon);
