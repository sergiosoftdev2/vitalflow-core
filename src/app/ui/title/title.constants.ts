import { OfficialColors } from "../colors.constants";
import { TITLE_SIZE, TITLE_WEIGHT } from "./title.enum";

export const TITLE_BASE_CLASSES = `tracking-tight transition-colors duration-300 ease-in-out ${OfficialColors.default_text_accent}`;

export const TITLE_SIZE_CLASSES: Record<TITLE_SIZE, string> = {
  sm: 'text-base sm:text-lg',
  md: 'text-lg sm:text-xl',
  lg: 'text-xl sm:text-2xl',
  xl: 'text-2xl sm:text-3xl',
  '2xl': 'text-3xl sm:text-4xl',
  '3xl': 'text-4xl sm:text-5xl',
};

export const TITLE_WEIGHT_CLASSES: Record<TITLE_WEIGHT, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};
