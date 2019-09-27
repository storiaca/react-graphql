import React, { useState, useEffect } from "react";
import axios from "axios";
import { pokemonUrl } from "../data/pokemonUrl";
//import { query } from "../util/query";

// const axiosPokemon = axios.create({
//   baseURL: pokemonUrl
// });
function Pokemon(props) {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async() => {

      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );
      setData(result.data);
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemon;
