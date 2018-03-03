import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions';
import PokemonCard from './PokemonCard';
import ReactLoading from 'react-loading';
import { LoadingWrapper, PokemonsWrapper } from '../styles';



class PokemonList extends React.Component {

    componentDidMount() {
        const {getData} = this.props;
          getData();
    }

    render() {
      const {isLoading} = this.props.data;
      //console.log(this.props.data);

      return (
          <div>
            <PokemonsWrapper>
              {this.props.data.data.map((pokemon,index) => {
                  return (
                    <PokemonCard key={pokemon.name} id={index+1} pokemon={pokemon}/>
                  )
              })}
            </PokemonsWrapper>
          </div>
      )
    }

}

function mapStateToProps(state) {
    const {data} = state;
    return {data}
}

export default connect(mapStateToProps, {getData})(PokemonList);
