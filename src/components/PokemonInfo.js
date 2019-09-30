import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Pokemon from "./Pokemon/Pokemon";
import Pagination from "./Pagination/Pagination";
import Spinner from "./Spinner/Spinner";
import classes from "./PokemonInfo.module.css";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const { loading, data } = useQuery(GET_POKEMONS);

  //console.log(data);
  //console.log(props);

  let content;
  if (loading) {
    content = <Spinner />;
  } else {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.pokemons.slice(indexOfFirstPost, indexOfLastPost);
    console.log(data.pokemons.length);
    content = currentPosts.map(item => {
      return (
        <Pokemon
          key={item.id}
          name={item.name}
          image={item.image}
          types={item.types}
          height={item.height}
          weight={item.weight}
          attacks={item.attacks}
        />
      );
    });
  }
  // Change page
  const onClickPaginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={classes.PokemonInfo}>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts="50"
        paginate={onClickPaginate}
      />
      <h1>Pokemons</h1>
      {content}
    </div>
  );
}

export default PokemonInfo;
