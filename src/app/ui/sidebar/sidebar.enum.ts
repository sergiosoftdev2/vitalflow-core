import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface SidebarItem {
  label: string;
  icon: IconDefinition;
  route: string;
  badge?: {
    value: string | number;
    color: 'primary' | 'secondary' | 'success' | 'destructive'; 
  };
}
