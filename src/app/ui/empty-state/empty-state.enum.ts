export const EMPTY_STATE_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
} as const;

export type EMPTY_STATE_SIZE = typeof EMPTY_STATE_SIZES[keyof typeof EMPTY_STATE_SIZES];
