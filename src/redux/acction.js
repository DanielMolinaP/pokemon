import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_ALL_INFO = "GET_ALL_INFO";
export const CLEAR = "CLEAR";

export const getAllPokemons = (url = "https://pokeapi.co/api/v2/pokemon/") => {
  return function (dispatch) {
    try {
      axios
        .get(url)
        .then((res) => {
          //console.log("Pokémons:", res.data.results); // Verificar respuesta de la API
          return res.data;
        })
        .then((data) => dispatch({ type: GET_ALL_POKEMONS, payload: data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllInfo = (name) => {
  return function (dispatch) {
    try {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          //console.log("Pokemon Details:", res.data); // Verificar respuesta de la API
          return res.data;
        })
        .then((all) => dispatch({ type: GET_ALL_INFO, payload: all }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const clear = () => {
  return function (dispatch) {
    dispatch({ type: CLEAR, payload: undefined})
  };
};
