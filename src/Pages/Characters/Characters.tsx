import React from 'react';
import { useNavigate } from 'react-router-dom';

import UiTablePaginated from 'Components/UiTable/UiTablePaginated';
import { GetCharactersList } from 'api/Characters/GetCharactersList';

import charactersUtils from './charactersUtils.utils';
import { Character } from './charactersUtils.utils';

const Characters = () => {
  const navigate = useNavigate();

  const handleRowClick = (option: Character) => {
    navigate(`/characters/${option.id}`);
  };

  return (
    <UiTablePaginated<Character>
      fetchAction={GetCharactersList}
      columns={charactersUtils.getColumns()}
      onRowClick={handleRowClick}
    />
  );
};

export default Characters;
