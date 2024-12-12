import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, AfterViewInit, ViewChild, OnChanges, SimpleChanges, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import { DialogEventComponent } from '../../shared/dialog-event/dialog-event.component';
import { EventData } from '../../shared/interface/event.interface';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements AfterViewInit {
  readonly dialog = inject(MatDialog);

  @ViewChild('calendar', { static: true }) calendarEl!: ElementRef;
  @Input() data!: EventData[];

  calendar!: Calendar;

  ngAfterViewInit() {
    this.calendar = new Calendar(this.calendarEl.nativeElement, {
      plugins: [listPlugin],
      initialView: 'listMonth',
      events: this.data
        .filter(event => event.start !== null)
        .map(event => ({
          title: event.title,
          start: event.start as Date,
          backgroundColor: event.borderColor || '#3788d8',
          dressCode: event.dressCode,
          choristers: event.choristers,
          solisters: event.solisters,
          locationName: event.locationName,
          locationPos: event.locationPos
        })),
      eventClick: (info) => {
        const event: EventData = {
          title: info.event.title,
          start: info.event.start,
          choristers: info.event.extendedProps['choristers'],
          solisters: info.event.extendedProps['solisters'],
          dressCode: info.event.extendedProps['dressCode'],
          locationName: info.event.extendedProps['locationName'],
          locationPos: info.event.extendedProps['locationPos']
        }
        this.openDialog(event);
      }
    });

    this.calendar.render();
  }

  openDialog(info: EventData) {
    const dialogRef = this.dialog.open(DialogEventComponent, {
      data: info
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  #formatEvents(events: EventData[]) {
    return events.map(event => ({
      title: event.title,
      start: event.start,
      backgroundColor: event.borderColor || '#3788d8',
      dressCode: event.dressCode,
      choristers: event.choristers,
      solisters: event.solisters,
      locationName: event.locationName,
      locationPos: event.locationPos
    }));
  }
}
