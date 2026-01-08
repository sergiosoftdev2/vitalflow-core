export const AVATAR_VARIANTS = {
  circle: 'circle',
  square: 'square'
} as const;

export type AVATAR_VARIANT = keyof typeof AVATAR_VARIANTS;
