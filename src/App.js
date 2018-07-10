import React, { Component } from 'react';
//import './App.css';
import PokemonList from './components/pokemonList';
import PokemonDetails from './components/pokemonDetails';

class App extends Component {
  render() {
    return (
      <div>
        <PokemonList />
        <PokemonDetails />
      </div>
    );
  }
}

export default App;
