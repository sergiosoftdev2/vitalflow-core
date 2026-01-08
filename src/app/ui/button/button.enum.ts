export enum BUTTON_COLORS {
  primary = 'primary',
  secondary = 'secondary',
  destructive = 'destructive',
}

export enum BUTTON_VARIANTS {
  outlined = 'outlined',
  filled = 'filled',
  ghost = 'ghost',
}

export type BUTTON_VARIANT = keyof typeof BUTTON_VARIANTS;
export type BUTTON_COLOR = keyof typeof BUTTON_COLORS;
