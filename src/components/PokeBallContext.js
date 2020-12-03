import React, { useState, createContext } from "react";

export const PokeBallContext = createContext();

export const PokeBallProvider = (props) => {
  const [pokeBall, catchPokemon] = useState([]);

  return (
      <PokeBallContext.Provider value={[pokeBall, catchPokemon]} >
          {props.children}
      </PokeBallContext.Provider>
  );
};