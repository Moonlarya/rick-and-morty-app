import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import CharacterPreview from "./CharacterPreview";

import { CharacterType } from "../types";

import "./slick.css";

type CharactersSliderPropsType = {
  loadedCharacter?: CharacterType;
  onClick: (character: CharacterType) => void;
};

const settings = {
  vertical: true,
  verticalSwiping: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const CharactersSlider = ({ onClick }: CharactersSliderPropsType) => {
  const cachedData = localStorage.getItem("characters-cache");
  const parsedCache = cachedData ? JSON.parse(cachedData) : [];

  const [activeCharacter, setActiveCharacter] = useState<CharacterType | null>(
    null
  );

  return (
    <>
      {parsedCache ? (
        <>
          <h2>Previously viewed</h2>
          <Slider {...settings}>
            {parsedCache.map((character: CharacterType) => {
              const isActive =
                activeCharacter?.infoData?.id === character?.infoData?.id;

              return (
                <PreviewWrapper
                  isActive={isActive}
                  key={character?.infoData?.id}
                  onClick={() => {
                    setActiveCharacter(character);
                    onClick(character);
                  }}
                >
                  {!isActive && <Overlay />}
                  <CharacterPreview
                    src={character?.portrait}
                    name={character?.infoData?.name}
                  />
                </PreviewWrapper>
              );
            })}
          </Slider>
        </>
      ) : null}
    </>
  );
};

const PreviewWrapper = styled.div<{
  isActive: boolean;
  onClick: (character: CharacterType) => void;
}>`
  position: relative;
  cursor: pointer;
  padding: 5px;
  border: ${(props) =>
    props.isActive ? "1px solid #56ab2f" : "1px solid #0000000"};
  border-radius: 5px;
  width: max-content !important;
`;

const Overlay = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: #e6e6e681;
  position: absolute;
  z-index: 3;
`;

export default CharactersSlider;
