export const SIDEBAR_BASE_CLASSES = `
  fixed top-0 left-0 h-screen w-72 
  flex flex-col p-6 border-r bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-r-4xl
  transition-transform duration-500 ease-in-out
  z-50
`;

export const SIDEBAR_ITEM_CLASSES = `
  flex items-center gap-3 px-4 py-3 rounded-2xl dark:text-zinc-300
  transition-all duration-300 ease-in-out group select-none cursor-pointer
  hover:bg-zinc-100 dark:hover:bg-zinc-700/50
`;

export const SIDEBAR_ITEM_ACTIVE_CLASSES = `
  bg-zinc-200 text-zinc-950 dark:bg-zinc-700 dark:!text-green-400 font-bold
`;
