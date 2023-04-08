import React, { forwardRef } from 'react';

import IconBase from '../IconBase';
import { IconBaseProps } from '../IconBase.type';

export const Icon = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} d="m9.6 7.2 4.8 4.8-4.8 4.8" />
    </IconBase>
  );
});

Icon.displayName = 'ChevronIcon';

export default Icon;
