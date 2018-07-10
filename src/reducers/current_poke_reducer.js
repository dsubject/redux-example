export default function(state = null, action) {
// the reducer decides how to change the 
//  state based on the action type	
	switch (action.type) {
		case 'POKEMON_SELECTED': 
			return action.payload
	}
	// return initial state if nothing matches
	return state
}