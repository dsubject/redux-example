import { POKEMON_SELECTED } from "../constants/redux";

// reducers create the state but they need a signal
//  to know when to do what, which is where "actions"
//  come in

// dispatching an action means signalling
//  to the store that state needs to change

// an action is just a JS object that describes what
//  changed in the app

function selectPokemon(pokemon) {
    return {
      // type property describes how state should change
      type: POKEMON_SELECTED,
      // payload can be used to add new items
      //  to the state --> in this case i'm not adding
      //  anything, just switching between pokemon descriptions
      payload: pokemon
    }
  }
  export default selectPokemon;