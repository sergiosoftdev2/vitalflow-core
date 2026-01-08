import { OfficialColors } from "../colors.constants";

export const INPUT_SEARCH_CONTAINER_CLASSES = 'relative flex items-center w-full group';

export const INPUT_SEARCH_ICON_CLASSES = `
  absolute left-4 text-zinc-500 dark:text-zinc-400 
  group-focus-within:text-green-500 transition-colors duration-300
`;

export const INPUT_SEARCH_CLASSES = `
  flex h-11 w-full rounded-2xl border 
  bg-zinc-100 dark:bg-zinc-900
  pl-11 pr-4 py-2 text-sm 
  placeholder:text-zinc-500 dark:placeholder:text-zinc-400 
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
  focus:ring-offset-zinc-100 dark:focus:ring-offset-zinc-900
  transition-all duration-300 ease-in-out 
  disabled:cursor-not-allowed disabled:opacity-50
  ${OfficialColors.default_border_color}
  text-zinc-900 dark:text-zinc-100
  hover:bg-zinc-200 dark:hover:bg-zinc-800
`;
