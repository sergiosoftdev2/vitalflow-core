import { TOAST_TYPE } from "./toast.enum";
import { OfficialColors } from "../colors.constants";

export const BASE_TOAST_CLASSES = `
  pointer-events-auto flex items-start gap-4 
  w-full max-w-md 
  p-4 rounded-[2rem] shadow-2xl 
  bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl 
  border border-zinc-100 dark:border-zinc-800
  transform transition-all duration-300 ease-in-out
  hover:translate-y-[-2px]
`;

export const TOAST_ICON_CONTAINER_CLASSES = `
  shrink-0 flex items-center justify-center 
  w-10 h-10 rounded-full 
  bg-zinc-50 dark:bg-zinc-800 
  border border-zinc-100 dark:border-zinc-700
`;

export const TOAST_TYPE_COLORS: Record<TOAST_TYPE, string> = {
  [TOAST_TYPE.SUCCESS]: 'text-green-500',
  [TOAST_TYPE.ERROR]: 'text-red-500',
  [TOAST_TYPE.WARNING]: 'text-amber-500',
  [TOAST_TYPE.INFO]: 'text-blue-500',
};

// Optional: specific borders or backgrounds if we wanted to colorize the whole toast
// For now, keeping it premium/clean with just icon colors.
