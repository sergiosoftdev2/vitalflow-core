export type TITLE_SIZE = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export const TITLE_SIZES = {
  sm: 'sm' as TITLE_SIZE,
  md: 'md' as TITLE_SIZE,
  lg: 'lg' as TITLE_SIZE,
  xl: 'xl' as TITLE_SIZE,
  '2xl': '2xl' as TITLE_SIZE,
  '3xl': '3xl' as TITLE_SIZE,
} as const;

export type TITLE_WEIGHT = 'normal' | 'medium' | 'semibold' | 'bold';

export const TITLE_WEIGHTS = {
  normal: 'normal' as TITLE_WEIGHT,
  medium: 'medium' as TITLE_WEIGHT,
  semibold: 'semibold' as TITLE_WEIGHT,
  bold: 'bold' as TITLE_WEIGHT,
} as const;
