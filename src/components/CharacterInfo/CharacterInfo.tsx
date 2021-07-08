import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { InfoData } from "../types";
import CharactersSlider from "../CharactersSlider";
import CharacterDescription from "./CharacterDescription/CharacterDescription";
import CharacterPortrait from "./CharacterPortrait";

import bgImage from "../../assets/images/rick-and-morty-bg.png";

type CharacterInfoPropsType = {
  portrait?: string;
  infoData?: InfoData;
  isLoading: boolean;
};

const CharacterInfo = ({
  portrait,
  infoData,
  isLoading,
}: CharacterInfoPropsType) => {
  return (
    <>
      {isLoading ? (
        <ClipLoader />
      ) : (
        <CharacterPortrait src={portrait || bgImage} />
      )}
      {infoData ? <CharacterDescription data={infoData} /> : null}
      <CharactersSlider />
    </>
  );
};

export default CharacterInfo;
