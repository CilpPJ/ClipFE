import '@emotion/react';
import type { CSSObject, SerializedStyles } from '@emotion/react';

declare module 'react' {
  interface Attributes {
    css?: CSSObject | SerializedStyles;
  }
}
