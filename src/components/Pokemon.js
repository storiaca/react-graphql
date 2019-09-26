import React, { useState, useEffect } from "react";
import axios from "axios";
import { pokemonUrl } from "../data/pokemonUrl";
//import { query } from "../util/query";

// const axiosPokemon = axios.create({
//   baseURL: pokemonUrl
// });
function Pokemon(props) {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await axios(pokemonUrl);
    setData(result.data);
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Pokemon</h1>
    </div>
  );
}

export default Pokemon;
