import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import CharacterPreview from "./CharacterPreview";

import { CharacterType } from "../types";

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
            {parsedCache.map((character: CharacterType) => (
              <PreviewWrapper
                key={character?.infoData?.id}
                onClick={() => {
                  setActiveCharacter(character);
                  onClick(character);
                }}
              >
                {activeCharacter?.infoData?.id !== character?.infoData?.id && (
                  <Overlay />
                )}
                <CharacterPreview
                  src={character?.portrait}
                  name={character?.infoData?.name}
                />
              </PreviewWrapper>
            ))}
          </Slider>
        </>
      ) : null}
    </>
  );
};

const PreviewWrapper = styled.div<{
  onClick: (character: CharacterType) => void;
}>`
  position: relative;
  width: max-content;
  height: max-content;
  cursor: pointer;
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
