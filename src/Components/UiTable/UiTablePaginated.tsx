import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { DocumentNode } from '@apollo/client/core';

import ChevronIcon from 'Components/Icons/icons/ChevronIcon';
import SearchIcon from 'Components/Icons/icons/SearchIcon';
import { UiInput } from 'Components/UiInput/UiInput';

import UiTable from './UiTable';
import { UiTableProps } from './UiTable.types';

type UiTablePaginatedProps<TData> = {
  fetchAction: DocumentNode;
  type: string;
} & Omit<UiTableProps<TData>, 'data' | 'isDataLoading'>;

const getCountItemsVisible = (page: number, totalCount: number) => {
  if (!totalCount) return '0 - 0';
  return `${(page - 1) * 20 + 1} - ${page * 20 > totalCount ? totalCount : page * 20}`;
};

const UiTablePaginated = <TData extends object>({
  columns,
  fetchAction,
  type,
  ...rest
}: UiTablePaginatedProps<TData>) => {
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>('');

  const { data, loading, fetchMore } = useQuery(fetchAction, { variables: { page: page, name: filter } });

  useEffect(() => {
    fetchMore({ variables: { page, name: filter } });
  }, [page, filter]);

  const handeNext = () => {
    if (data[type]?.info?.next) {
      setPage((prev) => prev + 1);
    }
  };

  const handePrev = () => {
    if (data[type]?.info?.prev) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-[16px]">
          <button
            className="p-[8px] cursor-pointer hover:bg-[#EEEEEE] disabled:opacity-60"
            onClick={handePrev}
            disabled={loading}
          >
            <ChevronIcon className="stroke-black rotate-180" />
          </button>
          <button
            className="p-[8px] cursor-pointer hover:bg-[#EEEEEE] disabled:opacity-60"
            onClick={handeNext}
            disabled={loading}
          >
            <ChevronIcon className="stroke-black" />
          </button>
          {loading || <div>{getCountItemsVisible(page, data[type]?.info?.count)}</div>}
        </div>
        <UiInput
          withIcon
          icon={<SearchIcon className="absolute top-[50%] right-[8px] translate-y-[-50%] stroke-gray-600 w-[16px]" />}
          onChange={(e) => {
            setPage(1);
            setFilter(e.target.value);
          }}
        />
      </div>
      <UiTable data={data ? data[type]?.results : []} columns={columns} isDataLoading={loading} {...rest} />
    </div>
  );
};

export default UiTablePaginated;
