import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPokemon } from "./services/fetchPokemon";
import PokemonData from "./PokemonData/PokemonData";
import { Alert } from "react-bootstrap";
import BootstrapLoading from "./BootstrapEffects/BootstrapLoading";

const HomePage = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [emptyError, setEmptyError] = React.useState(false);
  const [wrongPokemonError, setWrongPokemonError] = React.useState("");

  const getPokemon = async (query) => {
    if (!query) {
      setWrongPokemonError("You must enter a Pokemon");
      setEmptyError(true);
      return;
    }
    setEmptyError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log(results);
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setEmptyError(true);
        setWrongPokemonError("Pokemon not found.");
      }
    }, 1500);
  };

  return (
    <div>
      {emptyError ? <Alert variant="danger">{wrongPokemonError}</Alert> : null}
      <SearchBar getPokemon={getPokemon} />
      {loading ? <BootstrapLoading /> : null}
      {!loading && pokemon ? (
        <PokemonData
          name={pokemon.name}
          sprite={pokemon.sprites.front_default}
          moves={pokemon.moves}
        />
      ) : null}
    </div>
  );
};

export default HomePage;
