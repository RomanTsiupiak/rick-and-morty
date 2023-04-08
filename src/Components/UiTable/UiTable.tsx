import React from 'react';
import clsx from 'clsx';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

import UiLoader from '../UiLoader/UiLoader';

import { UiTableProps } from './UiTable.types';

const UiTable = <TData extends object>({
  data,
  columns,
  className,
  isDataLoading,
  onRowClick = () => {},
}: UiTableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isDataLoading) {
    return (
      <div className="fixed top-[50%] left-[50%] translate-[50%] ">
        <UiLoader />
      </div>
    );
  }

  return (
    <table className={clsx('w-full border-separate border-spacing-y-[16px]', className)}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="text-[13px] text-start pl-[16px]">
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            onClick={() => onRowClick(row.original)}
            key={row.id}
            className="bg-[#FFFFFF] shadow-md rounded-2xl cursor-pointer"
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="first:rounded-l-[16px] last:rounded-r-[16px] p-[16px]">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UiTable;
