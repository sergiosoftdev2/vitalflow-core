import { OfficialColors } from "../colors.constants";
import { EMPTY_STATE_SIZES } from "./empty-state.enum";

export const BASE_CLASSES = `
  flex flex-col items-center justify-center text-center
  rounded-3xl border
  transition-all duration-300
  ${OfficialColors.default_bg_color}
  ${OfficialColors.default_border_color}
`;

export const ICON_CONTAINER_CLASSES = `
  flex items-center justify-center rounded-full
  bg-zinc-100 dark:bg-zinc-800
  mb-4
`;

export const SIZE_VARIANTS = {
  [EMPTY_STATE_SIZES.sm]: 'p-6 min-h-[200px]',
  [EMPTY_STATE_SIZES.md]: 'p-8 min-h-[300px]',
  [EMPTY_STATE_SIZES.lg]: 'p-12 min-h-[400px]',
};

export const ICON_SIZES = {
  [EMPTY_STATE_SIZES.sm]: 'w-12 h-12 text-2xl',
  [EMPTY_STATE_SIZES.md]: 'w-16 h-16 text-3xl',
  [EMPTY_STATE_SIZES.lg]: 'w-20 h-20 text-4xl',
};

export const TEXT_STYLES = {
  title: `font-bold ${OfficialColors.default_text_accent} mb-2`,
  description: `${OfficialColors.default_text_subtle} max-w-sm mx-auto mb-6 leading-relaxed`,
};
