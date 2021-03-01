import React from "react";
import { useSelector } from "react-redux";
import CharacterCard from "../components/CharacterCard";
import { selectCharacter } from "../features/characterSlice";
import styled from "styled-components";

function CharacterScreen() {
  const character = useSelector(selectCharacter);

  return (
    <ScreenContainer>
      <StarfieldLeft />
      <CharacterCard character={character} />
      <StarfieldRight />
    </ScreenContainer>
  );
}

export default CharacterScreen;

const ScreenContainer = styled.div`
  padding: 40px;
  margin-top: 200px;
`;

const StarfieldLeft = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;

  left: 0;
  height: 1700px;
  background-position: left center;
  background-size: 100% auto;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg);
`;

const StarfieldRight = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;

  right: 0;
  height: 1700px;
  background-position: right center;
  background-size: auto 100%;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg);
`;
