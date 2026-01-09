import { OfficialColors } from "../colors.constants";

export const TABLE_CONTAINER_CLASSES = `
  relative overflow-hidden rounded-3xl border ${OfficialColors.default_border_color}
  ${OfficialColors.default_bg_color}
  transition-all duration-300 ease-in-out
`;

export const TABLE_CLASSES = `
  w-full border-collapse text-left
`;

export const TABLE_HEADER_CLASSES = `
  bg-zinc-50/50 dark:bg-zinc-800/50
  border-b ${OfficialColors.default_border_color}
`;

export const TABLE_HEADER_CELL_CLASSES = `
  px-6 py-4 text-xs font-semibold uppercase tracking-wider
  ${OfficialColors.default_text_subtle}
`;

export const TABLE_ROW_CLASSES = `
  group
  border-b last:border-b-0 ${OfficialColors.default_border_color}
  ${OfficialColors.default_bg_hover}
  transition-colors duration-200
`;

export const TABLE_CELL_CLASSES = `
  px-6 py-4 text-sm
  ${OfficialColors.default_text_accent}
`;

export const EMPTY_STATE_CLASSES = `
  flex flex-col items-center justify-center py-12 px-6
  ${OfficialColors.default_text_subtle}
`;
