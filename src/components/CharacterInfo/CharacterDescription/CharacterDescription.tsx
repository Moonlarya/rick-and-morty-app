import React from "react";

import { InfoData } from "../../types";
import DescriptionItem from "./DescriptionItem";

const CharacterDescription = ({ ...infoData }: { data: InfoData }) => {
  const { name, species, type, location, origin, status } = infoData.data;

  return (
    <table>
      <thead>
        <tr>
          <th>{name}</th>
        </tr>
      </thead>
      <tbody>
        <DescriptionItem title="Species" value={species} />
        <DescriptionItem title="Type" value={type} />
        <DescriptionItem title="Location" value={location} />
        <DescriptionItem title="Origin" value={origin} />
        <DescriptionItem title="Status" value={status} />
      </tbody>
    </table>
  );
};

export default CharacterDescription;
