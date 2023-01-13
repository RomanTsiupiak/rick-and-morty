import React from 'react';

import { IconBaseProps } from './IconBase.type';

export const IconBase = React.forwardRef<SVGSVGElement, IconBaseProps>(({ size, children, ...rest }, ref) => {
  const s = size ?? '24';
  return (
    <svg width={s} height={s} ref={ref} fill="currentColor" viewBox="0 0 24 24" {...rest}>
      {children}
    </svg>
  );
});

export default IconBase;
