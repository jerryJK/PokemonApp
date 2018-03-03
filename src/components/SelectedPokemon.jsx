import React from 'react';
import { PokemonCard, PokemonCardContent, PokemonImageWrapper, PokemonName} from '../styles';


class selectedPokemon extends React.Component{

  render(){
    const {name, id, height, weight} = this.props.pokemon;

    return (
              <PokemonCard className="col-sm-8 mx-auto">
                  <PokemonCardContent>
                    <PokemonImageWrapper>
                      <img src={`/img/${id}.png`} />
                    </PokemonImageWrapper>
                    <PokemonName>
                      <h3>{name}</h3>
                    </PokemonName>
                    <div className="text-center">
                      {`id: ${id} height: ${height} weight: ${weight}`}
                    </div>
                  </PokemonCardContent>
              </PokemonCard>
    )
    }
}

export default selectedPokemon;
