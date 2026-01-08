export const TAG_VARIANTS = {
  filled: 'filled',
  subtle: 'subtle',
  outline: 'outline'
} as const;

export type TAG_VARIANT = keyof typeof TAG_VARIANTS;

export const TAG_COLORS = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  destructive: 'destructive',
  info: 'info',
  warning: 'warning'
} as const;

export type TAG_COLOR = keyof typeof TAG_COLORS;
