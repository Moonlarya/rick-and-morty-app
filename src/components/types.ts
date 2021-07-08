export type CharacterPortraitPropsType = {
  src: string;
};

export type DescriptionItemProps = {
  title: string;
  value?: string;
};

export type CharacterType = {
  infoData?: InfoData;
  portrait?: string;
};

export type InfoData = {
  id: string;
  name?: string;
  species?: string;
  type?: string;
  location?: string;
  origin?: string;
  status?: string;
};
