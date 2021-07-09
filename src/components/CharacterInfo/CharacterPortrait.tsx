import React from "react";
import styled from "styled-components";

import { CharacterPortraitPropsType } from "../types";

const CharacterPortrait = ({ src }: CharacterPortraitPropsType) => {
  return <FittedImage src={src} alt="Character portrait" />;
};

const FittedImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default CharacterPortrait;
