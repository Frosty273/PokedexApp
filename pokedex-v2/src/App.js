import React from "react";
import Pokedex from "./components/pokedex";
import Pokemon from "./components/pokemon";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/PokedexApp"
        render={(props) => <Pokedex {...props} />}
      />
      <Route
        exact
        path="/PokedexApp/:pokemonId"
        render={(props) => <Pokemon {...props} />}
      />
    </Switch>
  );
}

export default App;
