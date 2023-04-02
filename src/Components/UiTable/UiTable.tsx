import React from 'react';
import clsx from 'clsx';
import { useReactTable, getCoreRowModel, flexRender, ColumnDef } from '@tanstack/react-table';

type UiTableProps<TData> = {
  data: TData[];
  // The reason of using any is here https://github.com/TanStack/table/issues/4241
  columns: ColumnDef<TData, any>[];
  className?: string;
};

const UiTable = <TData extends object>({ data, columns, className }: UiTableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
          <tr key={row.id} className="bg-[#FFFFFF] shadow-md rounded-2xl">
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
