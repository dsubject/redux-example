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

// the role of the reducer function is to take the previous state
//   and the action being dispatched and return the next state

// state is immutable, hence reducer needs to be a
//  pure function