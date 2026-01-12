import { TabVariant } from "./tabs.enum";

export const TABS_BASE_CLASSES = `
  flex items-center gap-1 transition-all duration-300 w-full overflow-x-auto overflow-y-hidden
`;

export const TAB_ITEM_BASE_CLASSES = `
  relative flex items-center justify-center gap-2 px-4 py-2 
  text-sm font-medium transition-all duration-300 cursor-pointer 
  select-none whitespace-nowrap focus:outline-none
`;

export const TABS_VARIANTS = {
  [TabVariant.FILL]: {
    container: 'bg-zinc-100/70 dark:bg-zinc-800/50 p-1 rounded-2xl',
    item: 'rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200',
    active: 'bg-green-600 text-white shadow-md shadow-green-600/20'
  },
  [TabVariant.LINE]: {
    container: 'border-b border-zinc-200 dark:border-zinc-800 gap-6 px-1',
    item: 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 border-b-2 border-transparent -mb-[1px]',
    active: '!text-green-600 !border-green-600 dark:!border-green-600 dark:!text-green-5  00'
  }
};
