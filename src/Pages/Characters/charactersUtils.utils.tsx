import { createColumnHelper } from '@tanstack/react-table';

export type Person = {
  image: string;
  name: string;
  status: string;
  gender: string;
};

const columnHelper = createColumnHelper<Person>();

const charactersUtils = {
  getColumns: () => {
    return [
      columnHelper.accessor('image', {
        cell: (info) => (
          <div className="w-[64px] h-[64px]">
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
