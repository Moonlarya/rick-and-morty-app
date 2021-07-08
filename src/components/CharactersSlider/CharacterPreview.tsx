import React from "react";

type CharacterPreviewPropsType = {
  src?: string;
  name?: string;
};

const CharacterPreview = ({ src, name }: CharacterPreviewPropsType) => {
  return <img src={src} alt={`${name ?? "Incognito"} portrait`} />;
};

export default CharacterPreview;
