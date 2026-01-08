export const BADGE_VARIANTS = {
  filled: 'filled',
  subtle: 'subtle',
  outline: 'outline'
} as const;

export type BADGE_VARIANT = keyof typeof BADGE_VARIANTS;

export const BADGE_COLORS = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  destructive: 'destructive',
  info: 'info',
  warning: 'warning'
} as const;

export type BADGE_COLOR = keyof typeof BADGE_COLORS;
