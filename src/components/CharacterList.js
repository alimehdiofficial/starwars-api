import React from "react";
import Character from "./Character";

function CharacterList({ characters }) {
  return (
    <div>
      {characters.map((character) => (
        <Character character={character} key={character.id} />
      ))}
    </div>
  );
}

export default CharacterList;
