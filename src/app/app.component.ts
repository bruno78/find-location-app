import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">
      {{ title }}
    </md-toolbar>
    <app-display></app-display>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Event Space Finder';
  navLink = [
    { link: 'Dashboard' },
    { link: 'New' }
  ];

}
