import React, { useState } from "react";

import Button from "../components/Button";
import CharacterInfo from "../components/CharacterInfo";
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

  const clearCache = () => {
    localStorage.removeItem("characters-cache");
  };

  const { infoData, portrait } = character || {};

  return (
    <>
      <SearchField onFormSubmit={loadData} isLoading={isLoading} />
      <Button onClick={clearCache} title="Clear" variant="outline" />
      <CharacterInfo
        infoData={infoData}
        portrait={portrait}
        isLoading={isLoading}
      />
    </>
  );
};

export default Main;
