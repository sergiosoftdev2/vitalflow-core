import { Component, computed, input, Output, EventEmitter, TemplateRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColumnType } from './table.enum';
import * as Constants from './table.constants';

export interface TableColumn {
  key: string;
  label: string;
  type?: TableColumnType;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  template?: TemplateRef<any>;
}

import { AvatarComponent } from '../avatar/avatar';
import { BadgeComponent } from '../badge/badge';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, AvatarComponent, BadgeComponent],
  templateUrl: './table.html',
})
export class TableComponent {
  // Inputs using Signals
  data = input.required<any[]>();
  columns = input.required<TableColumn[]>();
  isLoading = input<boolean>(false);
  emptyMessage = input<string>('No se encontraron resultados');
  
  // Custom templates
  @ContentChild('cellTemplate', { static: false }) cellTemplate?: TemplateRef<any>;
  
  // Computed classes
  containerClasses = computed(() => Constants.TABLE_CONTAINER_CLASSES);
  tableClasses = computed(() => Constants.TABLE_CLASSES);
  headerClasses = computed(() => Constants.TABLE_HEADER_CLASSES);
  headerCellClasses = computed(() => Constants.TABLE_HEADER_CELL_CLASSES);
  rowClasses = computed(() => Constants.TABLE_ROW_CLASSES);
  cellClasses = computed(() => Constants.TABLE_CELL_CLASSES);
  emptyStateClasses = computed(() => Constants.EMPTY_STATE_CLASSES);

  // Events
  @Output() rowClick = new EventEmitter<any>();
  @Output() actionClick = new EventEmitter<{ action: string, row: any }>();

  onRowClick(row: any) {
    this.rowClick.emit(row);
  }

  onActionClick(event: MouseEvent, action: string, row: any) {
    event.stopPropagation();
    this.actionClick.emit({ action, row });
  }

  getCellValue(row: any, key: string) {
    return row[key];
  }

  getCellAlignment(align?: string) {
    switch (align) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-left';
    }
  }
}
