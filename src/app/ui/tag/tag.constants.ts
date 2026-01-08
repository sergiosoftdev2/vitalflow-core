import { TAG_COLORS, TAG_VARIANTS } from "./tag.enum";

export const TAG_BASE_CLASSES = `
  inline-flex items-center gap-1.5 px-3 py-1 
  rounded-lg text-xs font-semibold select-none
  transition-all duration-300 ease-in-out
  hover:brightness-95 active:scale-95 cursor-default
`;

export const TAG_COLOR_CLASSES = {
  [TAG_VARIANTS.filled]: {
    [TAG_COLORS.primary]: 'bg-green-500 text-white',
    [TAG_COLORS.secondary]: 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900',
    [TAG_COLORS.success]: 'bg-emerald-500 text-white',
    [TAG_COLORS.destructive]: 'bg-red-500 text-white',
    [TAG_COLORS.info]: 'bg-blue-500 text-white',
    [TAG_COLORS.warning]: 'bg-amber-500 text-white',
  },
  [TAG_VARIANTS.subtle]: {
    [TAG_COLORS.primary]: 'bg-green-500/10 text-green-600 dark:text-green-400',
    [TAG_COLORS.secondary]: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400',
    [TAG_COLORS.success]: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    [TAG_COLORS.destructive]: 'bg-red-500/10 text-red-600 dark:text-red-400',
    [TAG_COLORS.info]: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    [TAG_COLORS.warning]: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  [TAG_VARIANTS.outline]: {
    [TAG_COLORS.primary]: 'border border-green-500/30 text-green-600 dark:text-green-400',
    [TAG_COLORS.secondary]: 'border border-zinc-500/30 text-zinc-600 dark:text-zinc-400',
    [TAG_COLORS.success]: 'border border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    [TAG_COLORS.destructive]: 'border border-red-500/30 text-red-600 dark:text-red-400',
    [TAG_COLORS.info]: 'border border-blue-500/30 text-blue-600 dark:text-blue-400',
    [TAG_COLORS.warning]: 'border border-amber-500/30 text-amber-600 dark:text-amber-400',
  }
};
