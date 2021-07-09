import React, { useState } from "react";
import styled from "styled-components";

import CharacterInfo from "../components/CharacterInfo";
import CharactersSlider from "../components/CharactersSlider";
import SearchField from "../components/SearchField";

import { CharacterType } from "../components/types";
import CharacterService from "../services/CharacterService";

const Main = () => {
  const [character, setCharacter] = useState<CharacterType | undefined>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const loadData = async (_id: number) => {
    setLoading(true);

    const data = await CharacterService.getById(_id);
    const {
      id,
      name,
      species,
      type,
      location,
      origin,
      status,
      image,
      ..._otherData
    } = data;

    setCharacter({
      portrait: image,
      infoData: {
        id,
        name,
        species,
        type,
        location: location.name,
        origin: origin.name,
        status,
      },
    });

    updateCachedCharacters();

    setLoading(false);
  };

  const updateCachedCharacters = () => {
    const cachedData = localStorage.getItem("characters-cache");
    const parsedCache = cachedData ? JSON.parse(cachedData) : [];
    const updatedCache = parsedCache.some(
      (el: any) => el?.infoData?.id === character?.infoData?.id
    )
      ? [...parsedCache]
      : [...parsedCache, character];

    localStorage.setItem("characters-cache", JSON.stringify(updatedCache));
  };

  const { infoData, portrait } = character || {};

  return (
    <PageWrapper>
      <aside>
        <SearchField onFormSubmit={loadData} isLoading={isLoading} />
        <CharacterInfo
          infoData={infoData}
          portrait={portrait}
          isLoading={isLoading}
        />
      </aside>
      <aside>
        <CharactersSlider
          loadedCharacter={character}
          onClick={(character: CharacterType) => setCharacter(character)}
        />
      </aside>
    </PageWrapper>
  );
};

const GridWrapper = styled.main`
  width: 100%;
  display: grid;
`;

const PageWrapper = styled(GridWrapper)`
  grid-template-columns: 2fr 1fr;
  height: 100vh;
  min-height: max-content;
  padding: 20px;
  box-sizing: border-box;
`;

export default Main;
