import React from 'react';
import {connect} from 'react-redux';
import logo from '../img/pokemon.png';
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';
import SelectedPokemon from './SelectedPokemon';
import ReactLoading from 'react-loading';
import { MyApp, Header, AppTitle, Logo, LoadingWrapper } from '../styles';



class App extends React.Component {


    render() {
        const {isLoading, selectedPokemon} = this.props.data;

        return (
          <MyApp>
              <Header>
                <AppTitle>Get Your Pokemon</AppTitle>
                <Logo src={logo} alt="logo" />
              </Header>
              <SearchBar />
                {isLoading&&
                  <LoadingWrapper>
                      <ReactLoading type="bubbles" color="#4444" />
                  </LoadingWrapper>
                }
              <div>
                {selectedPokemon&&
                  <SelectedPokemon pokemon={selectedPokemon} />
                }
              </div>
              <PokemonList />
          </MyApp>
        )
    }

}

function mapStateToProps(state) {
    const {data} = state;
    return {data}
}

export default connect(mapStateToProps, null)(App);
