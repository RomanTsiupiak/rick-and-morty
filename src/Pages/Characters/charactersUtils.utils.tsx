import { createColumnHelper } from '@tanstack/react-table';

export type Character = {
  id: string;
  image: string;
  name: string;
  status: string;
  gender: string;
};

const columnHelper = createColumnHelper<Character>();

const charactersUtils = {
  getColumns: () => {
    return [
      columnHelper.accessor('image', {
        cell: (info) => (
          <div className="w-[56px] h-[56px]">
            <img src={info.getValue()} alt="avatar" className="w-full h-full rounded-full object-cover" />
          </div>
        ),
      }),
      columnHelper.accessor('name', {
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('status', {
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('gender', {
        cell: (info) => info.getValue(),
      }),
    ];
  },
};

export default charactersUtils;
