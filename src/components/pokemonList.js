import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectPokemon from '../actions/current_pokemon'
import { bindActionCreators } from 'redux'
import Card from './card'

class PokemonList extends Component {
  renderPokemon() {
    return this.props.pokemon.map((pokemon) => {
      return (
        <Card>
          <div className="list-item-style">
            <img
              src={pokemon.image}
              className="item-image"
              key={pokemon.name}
              onClick={() => this.props.selectPokemon(pokemon)} />
            <div>{pokemon.name}</div>
          </div>
        </Card>
      );
    });
  }
  render() {
    return (
      <div className="item1">
          {this.renderPokemon()}
      </div>
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