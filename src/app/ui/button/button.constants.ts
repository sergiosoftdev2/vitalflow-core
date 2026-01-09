import { COMPONENT_SIZES } from "../sizes.enum";
import { BUTTON_COLORS, BUTTON_VARIANTS } from "./button.enum";
import { OfficialColors } from "../colors.constants";

export const buttonVariantClasses = {
  [BUTTON_VARIANTS.filled]: 'shadow-sm border-transparent',
  [BUTTON_VARIANTS.outlined]: 'border bg-transparent hover:bg',
  [BUTTON_VARIANTS.ghost]: 'bg-transparent border-transparent'
};

export const filledButtonColors = {
  [BUTTON_COLORS.primary]: `${OfficialColors.primary_bg_color} ${OfficialColors.primary_text_color}`,
  [BUTTON_COLORS.secondary]: `${OfficialColors.secondary_bg_color} ${OfficialColors.secondary_text_color}`,
  [BUTTON_COLORS.destructive]: `${OfficialColors.destructive_bg_color} ${OfficialColors.destructive_text_color}`
}

export const coloredButtonColors = {
  [BUTTON_COLORS.primary]: `${OfficialColors.primary_action}`,
  [BUTTON_COLORS.secondary]: `${OfficialColors.secondary_action}`,
  [BUTTON_COLORS.destructive]: `${OfficialColors.destructive_action}`
}

export const buttonSizes = {
  [COMPONENT_SIZES.sm]: 'h-8 text-sm px-4 py-2',
  [COMPONENT_SIZES.base]: 'h-10 text-sm px-4 py-2',
  [COMPONENT_SIZES.md]: 'h-12 text-base px-4 py-2',
  [COMPONENT_SIZES.lg]: 'h-14 text-lg px-6 py-3'
}

export const BASE_CLASSES = `
  flex cursor-pointer gap-2 rounded-full items-center justify-center 
  text-sm font-medium focus:outline-none 
  transition-all duration-300 ease-in-out
  ring-0 ring-offset-0 
  focus:ring-2 focus:ring-offset-2 
  focus:ring-blue-500 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950
`;