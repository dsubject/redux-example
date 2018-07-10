import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectPokemon from '../actions/current_pokemon'
import { bindActionCreators } from 'redux'

class PokemonList extends Component {
  renderPokemon() {
    return this.props.pokemon.map((pokemon) => {
      return (
        <li
          key={pokemon.name}
          onClick={() => this.props.selectPokemon(pokemon)}>{pokemon.name}</li>
      );
    });
  }
  render() {
    return (
      <ul>
        {this.renderPokemon()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectPokemon: selectPokemon}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)