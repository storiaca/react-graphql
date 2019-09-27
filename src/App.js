import React from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { pokemonUrl } from "./data/pokemonUrl";
import Pokemon from "./components/Pokemon";
import "./App.css";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: pokemonUrl,
  cache
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Pokemon />
    </ApolloProvider>
  );
}

export default App;
