import {
  colors,
  height,
  semanticColors,
  semanticLayout,
  semanticTypography,
  spacing,
  typography,
} from '../../styles';

export const theme = {
  colors: {
    ...semanticColors,
    primitive: colors,
  },
  spacing,
  height,
  typography: {
    ...typography,
    semantic: semanticTypography,
  },
  layout: semanticLayout,
};

export type EmotionTheme = typeof theme;
