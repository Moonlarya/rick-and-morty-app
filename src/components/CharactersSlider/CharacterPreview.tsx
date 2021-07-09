import React from "react";
import styled from "styled-components";

type CharacterPreviewPropsType = {
  src?: string;
  name?: string;
};

const CharacterPreview = ({ src, name }: CharacterPreviewPropsType) => {
  return <PortraitImage src={src} alt={`${name ?? "Incognito"} portrait`} />;
};

const PortraitImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export default CharacterPreview;
