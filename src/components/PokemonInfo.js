import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Pokemon from "./Pokemon/Pokemon";

//import POKEMON_QUERY from "../graphql/PokemoQuery.graphql";

const GET_POKEMONS = gql`
  {
    pokemons(first: 50) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      types
      attacks {
        special {
          name
          type
          damage
        }
      }
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }
`;
function PokemonInfo(props) {
  //const [data, setData] = useState({ hits: [] });
  const { loading, data, client } = useQuery(GET_POKEMONS);

  console.log(data);
  let content;
  if (loading) {
    content = "Loading...";
  } else {
    content = data.pokemons.map(item => {
      return (
        <li key={item.id}>
          {item.name} <img src={item.image} alt="" />
        </li>
      );
    });
  }
  return (
    <div>
      <h3>Pokemons</h3>
      <ul>{content}</ul>
    </div>
  );
}

export default PokemonInfo;
