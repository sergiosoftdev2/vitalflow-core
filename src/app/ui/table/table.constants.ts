import { OfficialColors } from "../colors.constants";

export const TABLE_CONTAINER_CLASSES = `
  relative rounded-3xl border ${OfficialColors.default_border_color}
  ${OfficialColors.default_bg_color}
  transition-all duration-300 ease-in-out
`;

export const TABLE_CLASSES = `
  w-full border-separate border-spacing-0 text-left
`;

export const TABLE_HEADER_CLASSES = `
  bg-zinc-100 dark:bg-zinc-700
  border-b ${OfficialColors.default_border_color}
`;

export const TABLE_HEADER_CELL_CLASSES = `
  px-4 py-4 text-sm font-semibold
  ${OfficialColors.default_text_accent}
`;

export const TABLE_ROW_CLASSES = `
  group h-12
  border-b last:border-b-0 ${OfficialColors.default_border_color}
  ${OfficialColors.default_bg_hover}
  transition-colors duration-200
`;

export const TABLE_CELL_CLASSES = `
  px-4 text-sm cursor-pointer truncate
  ${OfficialColors.default_text_medium}
`;

export const EMPTY_STATE_CLASSES = `
  flex flex-col items-center justify-center py-12 px-6
  ${OfficialColors.default_text_subtle}
`;
