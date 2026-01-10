import { OfficialColors } from "../colors.constants";

export const MODAL_BACKDROP_CLASSES = `
  fixed inset-0 z-[100] bg-zinc-950/20 dark:bg-zinc-950/60 
  backdrop-blur-sm transition-all duration-300
`;

export const MODAL_CONTAINER_CLASSES = `
  fixed inset-0 z-[101] flex items-end justify-center sm:items-center p-0 sm:p-6
`;

export const MODAL_BODY_CLASSES = `
  w-full sm:max-w-lg bg-white dark:bg-zinc-900 
  rounded-t-[32px] sm:rounded-[2rem] shadow-2xl border-t sm:border border-zinc-200 dark:border-zinc-800
  flex flex-col overflow-hidden transition-all duration-300
  max-h-[96vh] sm:max-h-[85vh]
`;

export const MODAL_HEADER_CLASSES = `
  px-6 py-5 flex items-start justify-between gap-4
`;

export const MODAL_CONTENT_CLASSES = `
  px-6 pb-6 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed
`;

export const MODAL_FOOTER_CLASSES = `
  px-6 py-5 bg-zinc-50/50 dark:bg-zinc-800/50 border-t border-zinc-100 dark:border-zinc-800
  flex flex-col sm:flex-row-reverse gap-3
`;

export const CLOSE_BUTTON_CLASSES = `
  p-2 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200
  hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-blue-500
`;
