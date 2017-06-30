import { Component } from '@angular/core';
// import { EventSpace } from './event-space';

export class EventSpace {
    id:  number;
    name: string;
    capacity: number;
    floor: number;
    recording_capabilities: boolean;
    breakout_room: boolean;
    location: string;
    address?: string;
    contact?: string[];
    note?: string;
    photo?: string[];
    security_process?: string;
    geospatial?: string[];
}


@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
  isEdit = false;
  eventSpace: EventSpace = {
    id:  2,
    name: 'West Room',
    capacity: 50,
    floor: 3,
    recording_capabilities: true,
    breakout_room: false,
    location: 'Google',
    address: '111 9th ave',
    contact: ['John Doe'],
    note: 'Ipsum lorem bla bla bla bla',
    photo: ['this.url.com'],
    security_process: 'Full name at the door'
  };
  edit(eventSpace: EventSpace ){
    this.eventSpace = eventSpace;
    this.isEdit = true;
  }
  cancel(): void {
    this.isEdit = false;
  }
}
