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
        <Pokemon
          key={item.id}
          name={item.name}
          image={item.image}
          types={item.types}
          height={item.height}
          weight={item.weight}
        />
      );
    });
  }
  return (
    <div>
      <h1>Pokemons</h1>
      {content}
    </div>
  );
}

export default PokemonInfo;
