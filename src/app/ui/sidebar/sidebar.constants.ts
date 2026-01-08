export const SIDEBAR_BASE_CLASSES = `
  fixed top-0 left-0 h-screen w-72  
  flex flex-col p-6 border-r bg-zinc-50 border-zinc-200 dark:border-zinc-600 rounded-r-4xl
  transition-transform duration-500 ease-in-out
  z-50
`;

export const SIDEBAR_ITEM_CLASSES = `
  flex items-center gap-3 px-4 py-3 rounded-2xl
  transition-all duration-300 ease-in-out group select-none cursor-pointer
`;

export const SIDEBAR_ITEM_ACTIVE_CLASSES = `
  bg-zinc-200 text-zinc-950 dark:text-zinc-50
`;
