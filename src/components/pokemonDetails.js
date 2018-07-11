import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonDetails extends Component {
	render() {
		if (!this.props.pokemon) {
			return (
				<div className="item2">Click on a Pokemon :-)</div>
			);
		}
		return (
			<div className="item2">
				<div className="title-style">
					<h4 id="name-style">Type: {this.props.pokemon.type}</h4>
					<h4 id="type-style">Species: {this.props.pokemon.species}</h4>
				</div>
				<div>
					<img className="item-details-image" src={this.props.pokemon.image} />
				</div>
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