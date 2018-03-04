import React from 'react';
import {getData} from '../actions';
import {connect} from 'react-redux';
import { PokemonListCard, PokemonCardContent, PokemonImageWrapper, PokemonName} from '../styles';


class PokemonCard extends React.Component{

  handleButtonClick(id) {
    this.props.getData(id);
  }

  render(){
    const {pokemon,id} = this.props;
    return (
            <PokemonListCard onClick={() => this.handleButtonClick(id)}>
                <PokemonCardContent>
                  <PokemonImageWrapper>
                      <img src={`/img/${id}.png`} />
                  </PokemonImageWrapper>
                  <PokemonName>
                      {pokemon.name}
                  </PokemonName>
                </PokemonCardContent>
            </PokemonListCard>
    )
    }
}

export default connect(null, {getData})(PokemonCard);
