import { BADGE_COLORS, BADGE_VARIANTS } from "./badge.enum";

export const BADGE_BASE_CLASSES = `
  inline-flex items-center justify-center 
  font-bold leading-none select-none
  transition-all duration-300
`;

export const BADGE_SHAPES = {
  circle: 'rounded-full aspect-square p-1 min-w-[1.25rem] min-h-[1.25rem] text-[10px]',
  pill: 'rounded-full px-2 py-0.5 text-[11px]'
};

export const BADGE_COLOR_CLASSES = {
  [BADGE_VARIANTS.filled]: {
    [BADGE_COLORS.primary]: 'bg-green-500 text-white',
    [BADGE_COLORS.secondary]: 'bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900',
    [BADGE_COLORS.success]: 'bg-emerald-500 text-white',
    [BADGE_COLORS.destructive]: 'bg-red-500 text-white',
    [BADGE_COLORS.info]: 'bg-blue-500 text-white',
    [BADGE_COLORS.warning]: 'bg-amber-500 text-white',
  },
  [BADGE_VARIANTS.subtle]: {
    [BADGE_COLORS.primary]: 'bg-green-500/10 text-green-600 dark:text-green-400',
    [BADGE_COLORS.secondary]: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400',
    [BADGE_COLORS.success]: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    [BADGE_COLORS.destructive]: 'bg-red-500/10 text-red-600 dark:text-red-400',
    [BADGE_COLORS.info]: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    [BADGE_COLORS.warning]: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  [BADGE_VARIANTS.outline]: {
    [BADGE_COLORS.primary]: 'border border-green-500 text-green-600 dark:text-green-400',
    [BADGE_COLORS.secondary]: 'border border-zinc-500 text-zinc-600 dark:text-zinc-400',
    [BADGE_COLORS.success]: 'border border-emerald-500 text-emerald-600 dark:text-emerald-400',
    [BADGE_COLORS.destructive]: 'border border-red-500 text-red-600 dark:text-red-400',
    [BADGE_COLORS.info]: 'border border-blue-500 text-blue-600 dark:text-blue-400',
    [BADGE_COLORS.warning]: 'border border-amber-500 text-amber-600 dark:text-amber-400',
  }
};
