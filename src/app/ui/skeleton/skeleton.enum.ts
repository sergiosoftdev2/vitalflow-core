export type SKELETON_TYPE = 'text' | 'circle' | 'rectangle' | 'table' | 'calendar' | 'card' | 'list';

export const SKELETON_TYPES = {
  text: 'text' as SKELETON_TYPE,
  circle: 'circle' as SKELETON_TYPE,
  rectangle: 'rectangle' as SKELETON_TYPE,
  table: 'table' as SKELETON_TYPE,
  calendar: 'calendar' as SKELETON_TYPE,
  card: 'card' as SKELETON_TYPE,
  list: 'list' as SKELETON_TYPE,
} as const;
