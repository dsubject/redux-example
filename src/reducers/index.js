import { combineReducers } from 'redux';
import PokeReducer from './pokemon_reducer'
import CurrentPokeReducer from './current_poke_reducer'

const rootReducer = combineReducers({
    pokemon: PokeReducer,
    currentPokemon: CurrentPokeReducer
});

export default rootReducer;