import React from "react";

import { CharacterType } from "../types";
import CharacterDescription from "./CharacterDescription/CharacterDescription";
import CharacterPortrait from "./CharacterPortrait";

const CharacterInfo = ({ portrait, infoData }: CharacterType) => {
  return (
    <>
      <CharacterPortrait src={portrait || ""} />
      {infoData ? <CharacterDescription data={infoData} /> : null}
    </>
  );
};

export default CharacterInfo;
