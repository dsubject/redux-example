import React, { Component } from 'react';
import { connect } from 'react-redux'

class PokemonDetails extends Component {
	render() {
		if (!this.props.pokemon) {
			return (
				<div>Click on a Pokemon :-)</div>
			);
		}
		return (
			<div>
				<h4>Name: {this.props.pokemon.name}</h4>
        <h4>Type: {this.props.pokemon.type}</h4>
        <img src={this.props.pokemon.image} />
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    pokemon: state.currentPokemon
  };
}

export default connect(mapStateToProps)(PokemonDetails)