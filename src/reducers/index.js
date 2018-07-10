import { combineReducers } from 'redux';
import PokeReducer from './pokemon_reducer'
import CurrentPokeReducer from './current_poke_reducer'

const rootReducer = combineReducers({
    pokemon: PokeReducer,
    currentPokemon: CurrentPokeReducer
});

export default rootReducer;

// a reducer is a JS function
//  it accepts 2 params: current state and an action

// state is immutable, hence reducer needs to be a
//  pure function