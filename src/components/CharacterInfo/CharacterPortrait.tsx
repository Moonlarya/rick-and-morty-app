import React from "react";

import { CharacterPortraitPropsType } from "../types";

const CharacterPortrait = ({ src }: CharacterPortraitPropsType) => {
  return <img src={src} alt="Character portrait" />;
};

export default CharacterPortrait;
