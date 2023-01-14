import React, { forwardRef } from 'react';

import IconBase from '../IconBase';
import { IconBaseProps } from '../IconBase.type';

export const Icon = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <path
        d="M8.50387 18.1227L17.5192 12.8638C18.1807 12.4779 18.1807 11.5221 17.5192 11.1362L8.50387 5.87726C7.83721 5.48837 7 5.96925 7 6.74104V17.259C7 18.0308 7.83721 18.5116 8.50387 18.1227Z"
        fill="currentColor"
      />
    </IconBase>
  );
});

Icon.displayName = 'PlayIcon';

export default Icon;
