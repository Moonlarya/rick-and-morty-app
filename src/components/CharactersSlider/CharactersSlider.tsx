import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";

import CharacterPreview from "./CharacterPreview";

import { CharacterType } from "../types";

import "./slick.css";

const settings = {
  dots: true,
  vertical: true,
  infinite: true,
  speed: 500,
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
              <div key={character?.infoData?.id}>
                <CharacterPreview
                  src={character?.portrait}
                  name={character?.infoData?.name}
                />
              </div>
            ))}
          </Slider>
        </>
      ) : null}
    </>
  );
};

export default CharactersSlider;
