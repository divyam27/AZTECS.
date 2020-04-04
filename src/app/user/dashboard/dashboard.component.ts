import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // tslint:disable-next-line: max-line-length
          { title: 'Code', cols: 2, rows: 1, imageurl: '../assets/Image/code.jpg', routingurl: 'codepage' },
          { title: 'Question Bank', cols: 2, rows: 1, imageurl: '../assets/Image/questionbank.jpg', routingurl: 'questionBank' },
          { title: 'Feedback', cols: 2, rows: 1, imageurl: '../assets/Image/survey.jpg', routingurl: 'feedback' }
        ];
      }

      return [
        { title: 'Code', cols: 1, rows: 1, imageurl: '../assets/Image/code.jpg', routingurl: '/codepage' },
        { title: 'Question Bank', cols: 1, rows: 1, imageurl: '../assets/Image/questionbank.jpg', routingurl: 'questionBank' },
        { title: 'Feedback', cols: 1, rows: 1, imageurl: '../assets/Image/survey.jpg', routingurl: 'feedback' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
