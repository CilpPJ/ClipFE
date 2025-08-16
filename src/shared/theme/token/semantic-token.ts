import {
  colors,
  height,
  semanticColors,
  semanticLayout,
  semanticTypography,
  spacing,
  typography,
  width,
} from '../../styles';

export const theme = {
  colors: {
    ...semanticColors,
    primitive: colors,
  },
  spacing,
  height,
  width,
  typography: {
    ...typography,
    semantic: semanticTypography,
  },
  layout: semanticLayout,
};

export type EmotionTheme = typeof theme;
