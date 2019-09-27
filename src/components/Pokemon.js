import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import POKEMON_QUERY from "../graphql/PokemoQuery.graphql";

function Pokemon(props) {
  const [data, setData] = useState({ hits: [] });
  return (
    <div>
      <h3>Pokemons</h3>
    </div>
  );
}

export default Pokemon;
