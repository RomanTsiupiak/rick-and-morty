import { ColumnDef } from '@tanstack/react-table';

export type UiTableProps<TData> = {
  data: TData[];
  // The reason of using any is here https://github.com/TanStack/table/issues/4241
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  className?: string;
  isDataLoading?: boolean;
  onRowClick?: (original: TData) => void;
};
