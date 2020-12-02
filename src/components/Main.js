import React, { useContext } from "react";
import Header from "./layout/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PokemonList from "./PokemonList";
import TypeList from "./TypeList";
import PokemonDetails from "./PokemonDetails";
import { ThemeContext } from "./ThemeContext";

function Main() {
    const [theme, setTheme] = useContext(ThemeContext);

    const pageStyle = {
        backgroundColor: `${theme}`,
        paddingBottom: '10px'
    }

    return (
        <Router>
          <div className="App" style={pageStyle}>
              <div className="container">
                  <Header />
                  <Route exact path={["/", "/pokemons"]}>
                      <PokemonList />
                  </Route>
                  <Route exact path="/types">
                      <TypeList />
                  </Route>
                  <Route path="/pokemon/:id" component={PokemonDetails} />
              </div>
          </div>
        </Router>
    );
};

export default Main;