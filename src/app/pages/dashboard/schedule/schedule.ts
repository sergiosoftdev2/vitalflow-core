import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageContainerComponent } from "../../../ui/container/container";
import { CalendarComponent } from "@schedule-x/angular";
import { createCalendar, viewMonthGrid, viewWeek, viewDay } from "@schedule-x/calendar";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { ButtonComponent } from "../../../ui/button/button";

import 'temporal-polyfill/global';
import '@schedule-x/theme-default/dist/index.css';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { SkeletonComponent } from "../../../ui/skeleton/skeleton";
import { TitleComponent } from "../../../ui/title/title";


@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, PageContainerComponent, CalendarComponent, ButtonComponent, FontAwesomeModule, SkeletonComponent, TitleComponent],
  templateUrl: './schedule.html',
})
export class ScheduleComponent implements OnInit {
  calendarApp: any;
  faCalendarPlus = faCalendarPlus

  ngOnInit() {
    this.calendarApp = createCalendar({
      locale: 'es-ES',
      theme: 'shadcn',
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
      callbacks: {
        onEventClick(calendarEvent, e: UIEvent) {
          console.log('onEventClick', calendarEvent)
        },
        onClickDate(date: any, e?: any) {
          e.preventDefault();
          if (e && (e.button === 2 || e.nativeEvent?.button === 2)) {
            console.log('¡Clic Derecho detectado!');
            console.log('Fecha:', date);
            return; 
          }

          console.log('Clic Izquierdo normal en:', date);
        }
      },
      plugins: [
        createDragAndDropPlugin(),
        createEventModalPlugin()
      ]
    });
  }

  handleRightClick(event: MouseEvent) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const dayElement = target.closest('[data-date]');

    if (dayElement) {
      const date = dayElement.getAttribute('data-date');
      console.log('¡Clic Derecho en fecha!', date);
    }
  }
}