import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import UiTable from './UiTable';
import { UiTableProps } from './UiTable.types';
import ChevronIcon from '../Icons/icons/ChevronIcon';
import { DocumentNode } from '@apollo/client/core';

type UiTablePaginatedProps<TData> = {
  fetchAction: DocumentNode;
} & Omit<UiTableProps<TData>, 'data' | 'isDataLoading'>;

const UiTablePaginated = <TData extends object>({ columns, fetchAction, ...rest }: UiTablePaginatedProps<TData>) => {
  const [page, setPage] = useState<number>(1);
  const { data, loading, fetchMore } = useQuery(fetchAction, { variables: { page: page } });

  useEffect(() => {
    fetchMore({ variables: { page } });
  }, [page]);

  const handeNext = () => {
    if (data?.characters?.info?.next) {
      setPage((prev) => prev + 1);
    }
  };

  const handePrev = () => {
    if (data?.characters?.info?.prev) {
      setPage((prev) => prev - 1);
    }
  };

  const getCountItemsVisible = (page: number, totalCount: number) => {
    return page * 20 > totalCount ? totalCount : page * 20;
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-end gap-[16px]">
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
        {loading || (
          <div>
            {(page - 1) * 20 + 1} - {getCountItemsVisible(page, data?.characters?.info?.count)}
          </div>
        )}
      </div>
      <UiTable data={data?.characters?.results ?? []} columns={columns} isDataLoading={loading} {...rest} />
    </div>
  );
};

export default UiTablePaginated;
