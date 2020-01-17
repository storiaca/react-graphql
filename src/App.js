import React from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { pokemonUrl } from "./data/pokemonUrl";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: pokemonUrl,
  cache
});

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonInfo />
    </ApolloProvider>
  );
}

export default App;
