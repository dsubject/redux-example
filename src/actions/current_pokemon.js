function selectPokemon(pokemon) {
    return {
      type: 'POKEMON_SELECTED',
      payload: pokemon
    }
  }
  export default selectPokemon;