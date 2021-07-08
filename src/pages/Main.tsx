import React, { useState } from "react";

import CharacterInfo from "../components/CharacterInfo";
import SearchField from "../components/SearchField";

import { CharacterType } from "../components/types";
import CharacterService from "../services/CharacterService";

const Main = () => {
  const [data, setData] = useState<CharacterType | undefined>();

  const loadData = async (id: number) => {
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
  };

  const { infoData, portrait } = data || {};

  return (
    <>
      <SearchField onFormSubmit={loadData} />
      <CharacterInfo infoData={infoData} portrait={portrait} />
    </>
  );
};

export default Main;
