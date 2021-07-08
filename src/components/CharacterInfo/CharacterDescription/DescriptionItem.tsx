import React from "react";

import { DescriptionItemProps } from "../../types";

const DescriptionItem = ({ title, value }: DescriptionItemProps) => {
  return (
    <tr>
      <th>{title}</th>
      <td>{value}</td>
    </tr>
  );
};

export default DescriptionItem;
