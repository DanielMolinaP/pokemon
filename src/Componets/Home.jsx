import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllInfo, clear } from "../redux/acction.js";
import Card from "./Card.jsx";

const Home = () => {
  const dispatch = useDispatch();
  
  // Obtener la lista de pokémon desde el estado global
  const { pokemons, pokemonDetails, next, previous } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  useEffect(() => {
    if (pokemons && pokemons.length > 0) {
      pokemons.forEach((pokemon) => {
        dispatch(getAllInfo(pokemon.name));
      });
    }
  }, [dispatch, pokemons]);

  const handleNextPage = () => {
    if (next) {
      dispatch(getAllPokemons(next));
      dispatch(clear());
    }
  };

  const handlePreviousPage = () => {
    if (previous) {
      dispatch(getAllPokemons(previous));
      dispatch(clear());
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Pokémon Cards</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="pagination-controls mb-4">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${!previous ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handlePreviousPage} disabled={!previous}>
                  Anterior
                </button>
              </li>
              <li className={`page-item ${!next ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handleNextPage} disabled={!next}>
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          {pokemonDetails && pokemonDetails.length > 0 ? (
            pokemonDetails.map((pokemon, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Card name={pokemon.name} image={pokemon.sprites.front_default} />
              </div>
            ))
          ) : (
            <p className="text-center">Cargando Pokémon...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
