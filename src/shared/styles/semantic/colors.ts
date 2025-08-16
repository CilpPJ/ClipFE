import { colors } from '../primitive';

export const semanticColors = {
  brand: {
    clip: colors.yellowGreen,
    kakao: colors.yellow,
  },
  text: {
    primary: colors.black,
    secondary: colors.yellowGreen,
    destructive: colors.red,
  },
  border: {
    primary: colors.gray[300],
    secondary: colors.yellowGreen,
    destructive: colors.red,
  },
  background: {
    primary: colors.gray[100],
  },
  button: {
    primary: colors.yellowGreen,
    disabled: colors.gray[400],
  },
  icon: {
    primary: colors.black,
    secondary: colors.yellowGreen,
    destructive: colors.red,
  },
  input: {
    primary: colors.gray[400],
    secondary: colors.yellowGreen,
    destructive: colors.red,
  },
} as const;
