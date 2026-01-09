import { OfficialColors } from "../colors.constants";

export const MENU_CONTAINER_CLASSES = `
  min-w-[160px] p-1.5 
  rounded-2xl shadow-2xl border
  ${OfficialColors.menu_bg_color}
  outline-none
  z-[100]
`;

export const MENU_ITEM_CLASSES = `
  flex items-center gap-2 w-full px-3 py-2 
  text-sm font-medium rounded-xl  
  ${OfficialColors.menu_item_hover}
  text-zinc-700 dark:text-zinc-300
  hover:text-zinc-950 dark:hover:text-white
  active:scale-[0.98]
  cursor-pointer select-none outline-none
`;

export const MENU_SEPARATOR_CLASSES = `
  my-1.5 border-t border-zinc-200 dark:border-zinc-800
`;
