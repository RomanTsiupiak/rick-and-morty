import React, { forwardRef } from 'react';

import IconBase from '../IconBase';
import { IconBaseProps } from '../IconBase.type';

export const Icon = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10C16 10.2331 15.9013 10.7067 15.5731 11.4449C15.2612 12.1466 14.8112 12.9357 14.2837 13.75C13.5443 14.8916 12.7039 16.0047 12 16.8866C11.2961 16.0047 10.4557 14.8916 9.71625 13.75C9.18883 12.9357 8.73884 12.1466 8.42687 11.4449C8.09871 10.7067 8 10.2331 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10ZM18 10C18 12.5937 14.3241 17.2536 12.7267 19.1562C12.3441 19.6119 11.6559 19.6119 11.2733 19.1562C9.67591 17.2536 6 12.5937 6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10ZM12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
        fill="currentColor"
      />
    </IconBase>
  );
});

Icon.displayName = 'LocationIcon';

export default Icon;
