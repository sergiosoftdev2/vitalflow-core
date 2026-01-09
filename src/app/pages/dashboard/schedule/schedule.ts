import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageContainerComponent } from "../../../ui/container/container";

// Importaciones según la documentación oficial
import { CalendarComponent } from "@schedule-x/angular";
import { createCalendar, viewMonthGrid, viewWeek, viewDay } from "@schedule-x/calendar";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";

// Importante: Polyfill para fechas (si no lo tienes en el main.ts, ponlo aquí)
import 'temporal-polyfill/global';
// Importante: Estilos (si no están en angular.json)
import '@schedule-x/theme-default/dist/index.css';

@Component({
  selector: 'app-schedule',
  standalone: true,
  // Usamos CalendarComponent que es el nombre oficial que viste en la docu
  imports: [CommonModule, PageContainerComponent, CalendarComponent],
  templateUrl: './schedule.html',
})
export class ScheduleComponent {
  calendarApp = createCalendar({
    views: [viewMonthGrid, viewWeek, viewDay],
    defaultView: viewMonthGrid.name,
    events: [
      {
        id: '1',
        title: 'Cita: Juan Pérez',
        start: Temporal.ZonedDateTime.from('2026-01-09T10:00[Europe/Madrid]'),
        end: Temporal.ZonedDateTime.from('2026-01-09T11:00[Europe/Madrid]'),
      },
      {
        id: '2',
        title: 'Revisión: María García',
        start: Temporal.ZonedDateTime.from('2026-01-10T12:00[Europe/Madrid]'),
        end: Temporal.ZonedDateTime.from('2026-01-10T13:30[Europe/Madrid]'),
      }
    ],
    plugins: [
      createDragAndDropPlugin(),
      createEventModalPlugin()
    ]
  });
}