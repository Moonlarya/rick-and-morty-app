import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import CharactersSlider from "../CharactersSlider";
import CharacterDescription from "./CharacterDescription/CharacterDescription";
import CharacterPortrait from "./CharacterPortrait";

import { CharacterType, InfoData } from "../types";

import bgImage from "../../assets/images/rick-and-morty-bg.png";

type CharacterInfoPropsType = {
  portrait?: string;
  infoData?: InfoData;
  isLoading: boolean;
  loadedCharacter?: CharacterType;
  onClick: (character: CharacterType) => void;
};

const CharacterInfo = ({
  portrait,
  infoData,
  isLoading,
  loadedCharacter,
  onClick,
}: CharacterInfoPropsType) => {
  return (
    <>
      {isLoading ? (
        <ClipLoader />
      ) : (
        <CharacterPortrait src={portrait || bgImage} />
      )}
      {infoData ? <CharacterDescription data={infoData} /> : null}
      <CharactersSlider loadedCharacter={loadedCharacter} onClick={onClick} />
    </>
  );
};

export default CharacterInfo;
