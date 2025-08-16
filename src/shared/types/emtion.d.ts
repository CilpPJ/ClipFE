import '@emotion/react';
import type { CSSObject, SerializedStyles } from '@emotion/react';

import type { EmotionTheme } from '../theme/token/semantic-token';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSObject | SerializedStyles;
  }
}
