import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { HttpClient } from '@angular/common/http';
import { app } from '../config/config';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Chorister, EventData, FirebaseEventData, Solister } from '../shared/interface/event.interface';

@Component({
  selector: 'app-calendar-wrapper',
  standalone: true,
  imports: [CommonModule, CalendarComponent],
  templateUrl: './calendar-wrapper.component.html',
  styleUrl: './calendar-wrapper.component.scss'
})
export class CalendarWrapperComponent implements OnInit {
  data!: EventData[];

  ngOnInit(): void {
    this.getEvents();
  }

  async getEvents() {
    try {
      const db = getFirestore(app);
      const events = await getDocs(collection(db, 'events'));
      const result = events.docs.map(doc => doc.data() as FirebaseEventData);
      this.data = result.map(event => ({
        ...event,
        start: new Date(event.data.seconds * 1000),
      })) as EventData[];
    } catch (error) {
      console.error('Errore nel recupero eventi:', error);
    }
  }
}
