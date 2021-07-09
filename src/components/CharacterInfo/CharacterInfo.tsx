import React from "react";
import styled from "styled-components";

import CharacterDescription from "./CharacterDescription/CharacterDescription";
import CharacterPortrait from "./CharacterPortrait";
import ImageLoaderSpinner from "./ImageLoaderSpinner";

import { InfoData } from "../types";

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
    <CharacterInfoWrapper>
      <ImageWrapper>
        {isLoading ? (
          <ImageLoaderSpinner />
        ) : (
          <CharacterPortrait src={portrait || bgImage} />
        )}
      </ImageWrapper>
      {infoData ? <CharacterDescription data={infoData} /> : null}
    </CharacterInfoWrapper>
  );
};

const ImageWrapper = styled.div`
  width: 235px;
  height: 235px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 23px 0px rgba(34, 60, 80, 0.2);
`;

const CharacterInfoWrapper = styled.section`
  display: flex;
`;

export default CharacterInfo;
