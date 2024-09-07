import { GET_ALL_POKEMONS, GET_ALL_INFO, CLEAR } from "./acction";

const initialState = {
  pokemons: [],
  pokemonDetails: [],
  next: null,
  previous: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous
      };
    case GET_ALL_INFO:
      return {
        ...state,
        pokemonDetails: [...state.pokemonDetails, action.payload],
      };
      case CLEAR:
      return {
        ...state,
        pokemonDetails: [],
      };
    default:
      return state;
  }
}

