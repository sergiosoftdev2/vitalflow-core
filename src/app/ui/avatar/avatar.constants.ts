import { COMPONENT_SIZES } from "../sizes.enum";
import { AVATAR_VARIANTS } from "./avatar.enum";

export const AVATAR_SIZES = {
  [COMPONENT_SIZES.sm]: 'w-8 h-8 text-xs',
  [COMPONENT_SIZES.base]: 'w-10 h-10 text-sm',
  [COMPONENT_SIZES.md]: 'w-12 h-12 text-base',
  [COMPONENT_SIZES.lg]: 'w-16 h-16 text-xl'
};

export const AVATAR_VARIANT_CLASSES = {
  [AVATAR_VARIANTS.circle]: 'rounded-full',
  [AVATAR_VARIANTS.square]: 'rounded-2xl'
};

export const BASE_AVATAR_CLASSES = `
  flex items-center justify-center overflow-hidden 
  bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400
  border-2 border-white dark:border-zinc-950
  transition-all duration-300 ease-in-out hover:scale-110 select-none
`;
