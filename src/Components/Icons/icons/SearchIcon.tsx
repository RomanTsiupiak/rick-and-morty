import React, { forwardRef } from 'react';

import IconBase from '../IconBase';
import { IconBaseProps } from '../IconBase.type';

export const Icon = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeWidth={2}
        d="M16.927 17.04 20.4 20.4m-9-13.2a3.6 3.6 0 0 1 3.6 3.6m4.28.64a7.84 7.84 0 1 1-15.68 0 7.84 7.84 0 0 1 15.68 0Z"
      />
    </IconBase>
  );
});

Icon.displayName = 'SearchIcon';

export default Icon;
