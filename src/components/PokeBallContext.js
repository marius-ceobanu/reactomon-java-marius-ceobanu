import React, { useState, useEffect, createContext } from "react";

export const PokeBallContext = createContext();

export const PokeBallProvider = (props) => {
  const [pokeBall, catchPokemon] = useState(localStorage.getItem('myPokemons') ? JSON.parse(localStorage.getItem('myPokemons')) : []);

  useEffect(() => {
      localStorage.setItem('myPokemons', JSON.stringify(pokeBall));
  }, [pokeBall]);

  return (
      <PokeBallContext.Provider value={[pokeBall, catchPokemon]} >
          {props.children}
      </PokeBallContext.Provider>
  );
};