import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";

import CharacterPreview from "./CharacterPreview";

import { CharacterType } from "../types";

const settings = {
  vertical: true,
  verticalSwiping: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const CharactersSlider = () => {
  const cachedData = localStorage.getItem("characters-cache");
  const parsedCache = cachedData ? JSON.parse(cachedData) : [];

  return (
    <>
      {parsedCache ? (
        <>
          <h2>Previously viewed</h2>
          <Slider {...settings}>
            {parsedCache.map((character: CharacterType) => (
              <CharacterPreview
                key={character?.infoData?.id}
                src={character?.portrait}
                name={character?.infoData?.name}
              />
            ))}
          </Slider>
        </>
      ) : null}
    </>
  );
};

export default CharactersSlider;
