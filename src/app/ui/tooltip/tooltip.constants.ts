import { OfficialColors } from "../colors.constants";

export const TOOLTIP_CLASSES = `
  px-2.5 py-1.5 
  rounded-lg text-xs font-medium 
  shadow-lg border
  ${OfficialColors.tooltip_bg_color}
  ${OfficialColors.tooltip_text_color}
  transition-all duration-200 ease-out
  select-none pointer-events-none
  z-50
`;
