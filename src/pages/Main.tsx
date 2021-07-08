import React, { useState } from "react";

import CharacterInfo from "../components/CharacterInfo";
import SearchField from "../components/SearchField";

import { CharacterType } from "../components/types";
import CharacterService from "../services/CharacterService";

const Main = () => {
  const [data, setData] = useState<CharacterType | undefined>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const loadData = async (id: number) => {
    setLoading(true);

    const data = await CharacterService.getById(id);
    const {
      name,
      species,
      type,
      location,
      origin,
      status,
      image,
      ..._otherData
    } = data;

    setData({
      portrait: image,
      infoData: {
        name,
        species,
        type,
        location: location.name,
        origin: origin.name,
        status,
      },
    });

    setLoading(false);
  };

  const { infoData, portrait } = data || {};

  return (
    <>
      <SearchField onFormSubmit={loadData} isLoading={isLoading} />
      <CharacterInfo
        infoData={infoData}
        portrait={portrait}
        isLoading={isLoading}
      />
    </>
  );
};

export default Main;
