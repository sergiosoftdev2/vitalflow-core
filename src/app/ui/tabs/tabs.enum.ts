export enum TabVariant {
  FILL = 'fill',
  LINE = 'line'
}

export interface TabItem {
  id: string;
  label: string;
  icon?: any;
  badge?: string | number;
}
