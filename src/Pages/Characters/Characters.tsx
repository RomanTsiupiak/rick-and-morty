import React from 'react';

import UiTable from 'Components/UiTable/UiTable';
import { GetSomeCharacters } from 'api/api';

import charactersUtils from './charactersUtils.utils';
import { Person } from './charactersUtils.utils';
import { useQuery } from '@apollo/client';

const Characters = () => {
  const { data } = useQuery(GetSomeCharacters);

  return (
    <div>
      <UiTable<Person> data={data?.characters?.results ?? []} columns={charactersUtils.getColumns()} />
    </div>
  );
};

export default Characters;
