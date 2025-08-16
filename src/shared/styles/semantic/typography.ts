import { typography } from '../primitive';

export const semanticTypography = {
  brand: {
    fontFamily: typography.fontFamily.bnviitlasik,
  },
  mainHeader: {
    fontFamily: typography.fontFamily.bnviitlasik,
    fontSize: typography.fontSize.xl,
  },
  pageHeader: {
    fontFamily: typography.fontFamily.pretendard,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeights.bold,
  },
} as const;
