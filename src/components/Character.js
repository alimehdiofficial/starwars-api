import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCharacter } from "../features/characterSlice";
import styled from "styled-components";

function Character({ character }) {
  const dispatch = useDispatch();

  const handleCharacter = () => {
    if (character.id) {
      dispatch(
        setCharacter({
          id: character.id,
          name: character.name,
          image: character.image,
          affiliations: character.affiliations,
          apprentices: character.apprentices,
          bornLocation: character.bornLocation,
          diedLocation: character.diedLocation,
          homeworld: character.homeworld,
          gender: character.gender,
          dimensions: character.height,
          species: character.species,
          masters: character.masters,
          wiki: character.wiki,
        })
      );
    }
  };

  return (
    <CharacterContainer>
      <Link to={`/character/${character.name}`} onClick={handleCharacter}>
        <img
          src={
            character.id === 28
              ? (character.image =
                  "https://static.wikia.nocookie.net/starwars/images/4/46/Monmothma.jpg/revision/latest?cb=20070615234013")
              : character.id === 77
              ? (character.image =
                  "https://static.wikia.nocookie.net/starwars/images/8/8b/SanHillHS-AOTC.png/revision/latest?cb=20200730024920")
              : character.image
          }
          alt={character.name}
        />
      </Link>
      <Link to={`/character/${character.id}`} onClick={handleCharacter}>
        <h1>{character.name}</h1>
      </Link>
      <Decal />
    </CharacterContainer>
  );
}

export default Character;

const CharacterContainer = styled.div`
  border-radius: 6px;
  width: 266px;
  background-color: #282727;
  position: relative;
  transition: all 0.25s ease;
  overflow: hidden;
  z-index: 1;

  :hover {
    transform: scale(1.05);
  }

  > a > img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 266px;
    height: 300px;
    border-bottom: 2px solid #9e4f60;
  }

  > a > h1 {
    background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/bg_hash_top@2x-1d6544f5cc3a.png");
    padding: 8px;
    display: inline-block;
    color: #ddd;
    font-size: 17px;
    text-transform: uppercase;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: color 125ms;

    :hover {
      color: #9e4f60;
    }
  }
`;

const Decal = styled.div`
  background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/decal@2x-937ac7c57dff.png");
  height: 47px;
  width: 47px;
  opacity: 0.06;
  position: absolute;
  bottom: -32px;
  right: 10px;
  background-size: 300% 200%;
  transform: scaleY(-1);
  background-position: -100% 0;
`;
